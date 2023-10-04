# Rough React Wrapper

<p align="center">
    <img src="https://raw.githubusercontent.com/fsefidabi/rough-react-wrapper/f39ea108357e6f4759f5cd5096aa1b1c645e27b8/assets/logo.svg" alt="logo">
</p>

<p align="center">
    <a href="https://choosealicense.com/licenses/mit/"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="npm"></a>
    <a href="https://www.npmjs.com/package/rough-react-wrapper"><img src="https://img.shields.io/npm/v/rough-react-wrapper" alt="npm"></a>
</p>


This is a React wrapper for [Rough.js](https://roughjs.com/), a JavaScript library for creating sketchy, hand-drawn graphics.

[rough-react-wrapper](https://github.com/fsefidabi/rough-react-wrapper) is an alternative for the archived [react-rough](https://github.com/ooade/react-rough) package published by [ooade](https://github.com/ooade).
The mentioned package has been archived by its owner, and we needed same react wrapper for rough.js drawable objects.
So, I decided to publish another version of this wrapper with more feature supports.

> 🟢 If you are already using the archived [react-rough](https://github.com/ooade/react-rough) package in your projects, you can simply install this new [rough-react-wrapper](https://github.com/fsefidabi/roughjs-react) package,
> and your code will work like a charm! The API is exactly similar, but with some more feature supports: 
> - React 18 support
> - NextJs app router and server side components support


## Installation

You can add rough-react-wrapper to your project via npm.

```
npm install rough-react-wrapper
```


## Usage

To render a rectangle svg in sketchy and hand-drawn style, add these lines into your React component:
```js
import ReactRough, { Rectangle } from 'rough-react-wrapper'

return (
    <ReactRough
        renderer={"svg"}
        width={250}
        height={250}
    >
      <Rectangle
          width={200}
          height={200}
          x={10}
          y={10}
          fill="#6700c9"
          fillStyle={"cross-hatch"}
      />
  </ReactRough>
)
```

It will generate a rectangle shape like this:

<img src="https://raw.githubusercontent.com/fsefidabi/rough-react-wrapper/master/assets/rough-rectangle.png" alt="rough-rectangle" width="200">


## Props

| name                      | type                                                             | default                                 | description                                                                                                                                                                                                                                                                                             |
| ------------------------- | ---------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| roughness                 | `number`                                                         | `1`                                     | Indicates how rough the drawing is. A rectangle with the roughness of 0 would be a perfect rectangle. There is no upper limit to this value, but a value over 10 is mostly useless.                                                                                                                     |
| bowing                    | `number`                                                         | `1`                                     | Indicates how curvy the lines are when drawing a sketch.                                                                                                                                                                                                                                                |
| seed                      | `number`                                                         | `0`                                     | Sets the seed for creating random values used in shape generation. This is useful for creating the exact shape when re-generating with the same parameters. The value of seed is between 1 and 2^31. If seed is not defined, or set to 0, no seed is used when computing random values.                 |
| stroke                    | `string`                                                         | `black`                                 | Represents the color used to paint the outline of the drawn objects. If this is set to `none`, the shape vectors do not contain a stroke (This is different from having a transparent stroke).                                                                                                          |
| strokeWidth               | `number`                                                         | `1`                                     | Sets the width of the strokes (in pixels).                                                                                                                                                                                                                                                              |
| fill                      | `string`                                                         | `transparent`                           | Represents the color used to fill a shape. In `hachure` style fills, this represents the color of the hachure lines. In `dots` style, it represents the color of the dots.                                                                                                                              |
| fillStyle                 | `enum` from [Fill Styles](#fill-styles)                          | `hachure`                               | Represents the filling style of an object.                                                                                                                                                                                                                                                              |
| fillWeight                | `number`                                                         | half of the `strokeWidth` value         | Represents the width of the hachure lines.                                                                                                                                                                                                                                                              |
| hachureAngle              | `number`                                                         | -41 degree                              | Defines the angle of the hachure lines (in degrees).                                                                                                                                                                                                                                                    |
| hachureGap                | `number`                                                         | four times of the `strokeWidth` value   | Defines the average gap between two hachure lines (in pixels).                                                                                                                                                                                                                                          |
| curveStepCount            | `number`                                                         | `9`                                     | When drawing ellipses, circles, and arcs, RoughJS approximates `curveStepCount` number of points to estimate the shape.                                                                                                                                                                                 |
| curveFitting              | `number`                                                         | `0.95`                                  | When drawing ellipses, circles, and arcs, Let RoughJS know how close should the rendered dimensions be when compared to the specified one. A value of 1 will ensure that the dimensions are almost 100% accurate.                                                                                       |
| strokeLineDash            | `array` of numbers                                               | `[]`                                    | Sets the line dash pattern. Use this property if you want the stroke to be dashed (this does not affect the hachure and other fills of the shape). Set its value as described in [setLineDash method of canvas](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash). |
| strokeLineDashOffset      | `number`                                                         | `0`                                     | Sets the line dash offset. Use this property if you want the stroke to be dashed. This is akin to the [lineDashOffset of canvas](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).                                                                             |
| fillLineDash              | `array` of numbers                                               | `[]`                                    | Similar to the `strokeLineDash` property but it affects the fills, not the stroke. eg. when you want hachure lines to be dashed.                                                                                                                                                                        |
| fillLineDashOffset        | `number`                                                         | `0`                                     | Similar to the `strokeLineDashOffset` property but it affects the fills, not the stroke.                                                                                                                                                                                                                |
| disableMultiStroke        | `boolean`                                                        | `true`                                  | Indicates if roughjs should or should not apply multiple strokes to sketch the shape.                                                                                                                                                                                                                   |
| disableMultiStrokeFill    | `boolean`                                                        | `true`                                  | Indicates if roughjs should or should not apply multiple strokes to sketch the hachure lines to fill the shape.                                                                                                                                                                                         |
| simplification            | 0 < `number` < 1                                                 | `0`                                     | When drawing paths using SVG path instructions, simplification can be set to simplify the shape by the specified factor. For example, a path with 100 points and a simplification value of 0.5 will estimate the shape to about 50 points. This will give more complex shapes a sketchy feel.           |
| dashOffset                | `number`                                                         | value of `hachureGap`                   | Indicates the nominal length of dash (in pixels) when filling a shape using the dashed style.                                                                                                                                                                                                           |
| dashGap                   | `number`                                                         | value of `hachureGap`                   | Indicates the nominal gap between dashes (in pixels) when filling a shape using the dashed style.                                                                                                                                                                                                       |
| zigzagOffset              | `number`                                                         | value of `hachureGap`                   | Indicates the nominal width of the zig-zag triangle in each line when filling a shape using the zigzag-line style.                                                                                                                                                                                      |
| preserveVertices          | `boolean`                                                        | `false`                                 | When randomizing shapes do not randomize locations of the end points. e.g. end points of line or a curve.                                                                                                                                                                                               |


### Fill Styles

| value          | description                                                                                                                                                                                                                      | example                                                                                                                                                         |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hachure`      | Draws sketchy parallel lines with the same roughness as defined by the roughness and the bowing properties of the shape. It can be further configured using the `fillWeight`, `hachureAngle`, and `hachureGap` properties.       | <img src="https://raw.githubusercontent.com/fsefidabi/rough-react-wrapper/master/assets/fill-style-hachure.png" alt="fill-style-hachure" width="50">            |
| `solid`        | Like a conventional fill                                                                                                                                                                                                         | <img src="https://raw.githubusercontent.com/fsefidabi/rough-react-wrapper/master/assets/fill-style-solid.png" alt="fill-style-solid" width="50">                |
| `zigzag`       | Draws zig-zag lines filling the shape                                                                                                                                                                                            | <img src="https://raw.githubusercontent.com/fsefidabi/rough-react-wrapper/master/assets/fill-style-zigzag.png" alt="fill-style-zigzag" width="50">              |
| `cross-hatch`  | Similar to `hachure`, but draws cross hatch lines (akin to two `hachure` fills 90 degrees from each other).                                                                                                                      | <img src="https://raw.githubusercontent.com/fsefidabi/rough-react-wrapper/master/assets/fill-style-cross-hatch.png" alt="fill-style-cross-hatch" width="50">    |
| `dots`         | Fills the shape with sketchy dots.                                                                                                                                                                                               | <img src="https://raw.githubusercontent.com/fsefidabi/rough-react-wrapper/master/assets/fill-style-dots.png" alt="fill-style-dots" width="50">                  |
| `dashed`       | Similar to `hachure` but the individual lines are dashed. Dashes can be configured using the `dashOffset` and `dashGap` properties.                                                                                              | <img src="https://raw.githubusercontent.com/fsefidabi/rough-react-wrapper/master/assets/fill-style-dashed.png" alt="fill-style-dashed" width="50">              |
| `zigzag-line`  | Similar to `hachure` but individual lines are drawn in a zig-zag fashion. The size of the zig-zag can be configured using the `zigzagOffset` proeprty.                                                                           | <img src="https://raw.githubusercontent.com/fsefidabi/rough-react-wrapper/master/assets/fill-style-zigzag-line.png" alt="fill-style-zigzag-line" width="50">    |


You can also check props specification in [rough.js documentation](https://github.com/rough-stuff/rough/wiki#options)


## Credits

rough.js react is inspired by these open source projects:

- [roughjs](https://github.com/rough-stuff/rough)
- [react-rough](https://github.com/ooade/react-rough)
- [react-rough-fiber](https://github.com/Bowen7/react-rough-fiber)

## License

[MIT](https://github.com/fsefidabi/rough-react-wrapper/blob/master/LICENSE)
