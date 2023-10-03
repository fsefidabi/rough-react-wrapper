import { Options } from "roughjs/bin/core";
import { Point } from "roughjs/bin/geometry";
export interface PolygonProps extends Options {
    points: Point[];
}
