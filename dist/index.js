'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var svg = require('roughjs/bin/svg');
var canvas = require('roughjs/bin/canvas');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var RoughContext = React.createContext({
    type: "canvas",
    width: 300,
    height: 150
});
RoughContext.displayName = "RoughContext";
function RoughProvider(props) {
    var config = props.config, _a = props.width, width = _a === void 0 ? 300 : _a, _b = props.height, height = _b === void 0 ? 150 : _b, _c = props.renderer, renderer = _c === void 0 ? "canvas" : _c, _d = props.children, children = _d === void 0 ? null : _d;
    var svgRef = React.useRef();
    var canvasRef = React.useRef();
    function getRefObject(renderer) {
        switch (renderer) {
            case "svg":
                return svgRef;
            case "canvas":
                return canvasRef;
            default:
                throw new Error("unsupported renderer type: ".concat(renderer));
        }
    }
    function getCorrespondJsx(renderer) {
        switch (renderer) {
            case "svg":
                return (React.createElement("svg", { width: width, height: height, ref: svgRef }, children));
            case "canvas":
                return (React.createElement("canvas", { width: width, height: height, ref: canvasRef }, children));
            default:
                throw new Error("unsupported renderer type: ".concat(renderer));
        }
    }
    return (React.createElement(RoughContext.Provider, { value: {
            config: config,
            width: width,
            height: height,
            type: renderer,
            ref: getRefObject(renderer)
        } }, getCorrespondJsx(renderer)));
}
function useRoughContext() {
    var context = React.useContext(RoughContext);
    if (!context) {
        throw new Error("useRoughContext must be used within a RoughProvider");
    }
    return context;
}

function ReactRough(props) {
    return (React.createElement(RoughProvider, __assign({}, props)));
}
ReactRough.displayName = "ReactRough";

var has = Object.prototype.hasOwnProperty;

function find(iter, tar, key) {
	for (key of iter.keys()) {
		if (dequal(key, tar)) return key;
	}
}

function dequal(foo, bar) {
	var ctor, len, tmp;
	if (foo === bar) return true;

	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();

		if (ctor === Array) {
			if ((len=foo.length) === bar.length) {
				while (len-- && dequal(foo[len], bar[len]));
			}
			return len === -1;
		}

		if (ctor === Set) {
			if (foo.size !== bar.size) {
				return false;
			}
			for (len of foo) {
				tmp = len;
				if (tmp && typeof tmp === 'object') {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!bar.has(tmp)) return false;
			}
			return true;
		}

		if (ctor === Map) {
			if (foo.size !== bar.size) {
				return false;
			}
			for (len of foo) {
				tmp = len[0];
				if (tmp && typeof tmp === 'object') {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!dequal(len[1], bar.get(tmp))) {
					return false;
				}
			}
			return true;
		}

		if (ctor === ArrayBuffer) {
			foo = new Uint8Array(foo);
			bar = new Uint8Array(bar);
		} else if (ctor === DataView) {
			if ((len=foo.byteLength) === bar.byteLength) {
				while (len-- && foo.getInt8(len) === bar.getInt8(len));
			}
			return len === -1;
		}

		if (ArrayBuffer.isView(foo)) {
			if ((len=foo.byteLength) === bar.byteLength) {
				while (len-- && foo[len] === bar[len]);
			}
			return len === -1;
		}

		if (!ctor || typeof foo === 'object') {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}

	return foo !== foo && bar !== bar;
}

function checkDeps(deps) {
  if (!deps || !deps.length) {
    throw new Error('useDeepCompareEffect should not be used with no dependencies. Use React.useEffect instead.');
  }

  if (deps.every(isPrimitive)) {
    throw new Error('useDeepCompareEffect should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
  }
}

function isPrimitive(val) {
  return val == null || /^[sbn]/.test(typeof val);
}
/**
 * @param value the value to be memoized (usually a dependency list)
 * @returns a momoized version of the value as long as it remains deeply equal
 */


function useDeepCompareMemoize(value) {
  var ref = React__namespace.useRef(value);
  var signalRef = React__namespace.useRef(0);

  if (!dequal(value, ref.current)) {
    ref.current = value;
    signalRef.current += 1;
  } // eslint-disable-next-line react-hooks/exhaustive-deps


  return React__namespace.useMemo(function () {
    return ref.current;
  }, [signalRef.current]);
}

function useDeepCompareEffect(callback, dependencies) {
  if (process.env.NODE_ENV !== 'production') {
    checkDeps(dependencies);
  } // eslint-disable-next-line react-hooks/exhaustive-deps


  return React__namespace.useEffect(callback, useDeepCompareMemoize(dependencies));
}

function Renderer(_a) {
    var render = _a.render;
    var _b = useRoughContext(), ref = _b.ref, config = _b.config, width = _b.width, height = _b.height, type = _b.type;
    var clearCanvas = function () {
        if (!(width && height)) {
            throw new Error("Canvas should have a defined width and height");
        }
        var canvas = ref && ref.current;
        var ctx = canvas && canvas.getContext("2d");
        ctx && ctx.clearRect(0, 0, width, height);
    };
    useDeepCompareEffect(function () {
        var rendererElement = ref && ref.current;
        if (!rendererElement)
            return;
        if (type === "svg") {
            var roughSvg = new svg.RoughSVG(rendererElement, config);
            var node_1 = render(roughSvg);
            rendererElement.appendChild(node_1);
            return function () {
                rendererElement.removeChild(node_1);
            };
        }
        else {
            var roughCanvas = new canvas.RoughCanvas(rendererElement, config);
            render(roughCanvas);
        }
    }, [ref, config, render, type]);
    if (type === "canvas")
        clearCanvas();
    return null;
}

function Arc(props) {
    var x = props.x, y = props.y, width = props.width, height = props.height, start = props.start, stop = props.stop, closed = props.closed, rest = __rest(props, ["x", "y", "width", "height", "start", "stop", "closed"]);
    var renderProps = React.useCallback(function (rc) { return rc.arc(x, y, width, height, start, stop, closed, rest); }, [x, y, width, height, start, stop, closed, rest]);
    return (React.createElement(Renderer, { render: function (rc) { return renderProps(rc); } }));
}
Arc.displayName = "Arc";
var Arc$1 = React.memo(Arc);

function Circle(props) {
    var x = props.x, y = props.y, diameter = props.diameter, rest = __rest(props, ["x", "y", "diameter"]);
    var renderProps = React.useCallback(function (rc) { return rc.circle(x, y, diameter, rest); }, [x, y, diameter, rest]);
    return (React.createElement(Renderer, { render: function (rc) { return renderProps(rc); } }));
}
Circle.displayName = "Circle";
var Circle$1 = React.memo(Circle);

function Curve(props) {
    var points = props.points, rest = __rest(props, ["points"]);
    var renderProps = React.useCallback(function (rc) { return rc.curve(points, rest); }, [points, rest]);
    return (React.createElement(Renderer, { render: function (rc) { return renderProps(rc); } }));
}
Curve.displayName = "Curve";
var Curve$1 = React.memo(Curve);

function Ellipse(props) {
    var x = props.x, y = props.y, width = props.width, height = props.height, rest = __rest(props, ["x", "y", "width", "height"]);
    var renderProps = React.useCallback(function (rc) { return rc.ellipse(x, y, width, height, rest); }, [x, y, width, height, rest]);
    return (React.createElement(Renderer, { render: function (rc) { return renderProps(rc); } }));
}
Ellipse.displayName = "Ellipse";
var Ellipse$1 = React.memo(Ellipse);

function Line(props) {
    var x1 = props.x1, y1 = props.y1, x2 = props.x2, y2 = props.y2, rest = __rest(props, ["x1", "y1", "x2", "y2"]);
    var renderProps = React.useCallback(function (rc) { return rc.line(x1, y1, x2, y2, rest); }, [x1, y1, x2, y2, rest]);
    return (React.createElement(Renderer, { render: function (rc) { return renderProps(rc); } }));
}
Line.displayName = "Line";
var Line$1 = React.memo(Line);

function LinearPath(props) {
    var points = props.points, rest = __rest(props, ["points"]);
    var renderProps = React.useCallback(function (rc) { return rc.linearPath(points, rest); }, [points, rest]);
    return (React.createElement(Renderer, { render: function (rc) { return renderProps(rc); } }));
}
LinearPath.displayName = "LinearPath";
var LinearPath$1 = React.memo(LinearPath);

function Path(props) {
    var d = props.d, rest = __rest(props, ["d"]);
    var renderProps = React.useCallback(function (rc) { return rc.path(d, rest); }, [d, rest]);
    return (React.createElement(Renderer, { render: function (rc) { return renderProps(rc); } }));
}
Path.displayName = "Path";
var Path$1 = React.memo(Path);

function Polygon(props) {
    var points = props.points, rest = __rest(props, ["points"]);
    var renderProps = React.useCallback(function (rc) { return rc.polygon(points, rest); }, [points, rest]);
    return (React.createElement(Renderer, { render: function (rc) { return renderProps(rc); } }));
}
Polygon.displayName = "Polygon";
var Polygon$1 = React.memo(Polygon);

function Rectangle(props) {
    var x = props.x, y = props.y, width = props.width, height = props.height, rest = __rest(props, ["x", "y", "width", "height"]);
    var renderProps = React.useCallback(function (rc) { return rc.rectangle(x, y, width, height, rest); }, [x, y, width, height, rest]);
    return (React.createElement(Renderer, { render: function (rc) { return renderProps(rc); } }));
}
Rectangle.displayName = "Rectangle";
var Rectangle$1 = React.memo(Rectangle);

exports.Arc = Arc$1;
exports.Circle = Circle$1;
exports.Curve = Curve$1;
exports.Ellipse = Ellipse$1;
exports.Line = Line$1;
exports.LinearPath = LinearPath$1;
exports.Path = Path$1;
exports.Polygon = Polygon$1;
exports.Rectangle = Rectangle$1;
exports.Renderer = Renderer;
exports.default = ReactRough;
exports.useRoughContext = useRoughContext;
//# sourceMappingURL=index.js.map
