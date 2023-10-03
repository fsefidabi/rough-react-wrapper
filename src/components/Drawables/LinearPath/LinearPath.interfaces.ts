import { Options } from "roughjs/bin/core"
import { Point } from "roughjs/bin/geometry"

export interface LinearPathProps extends Options {
    points: Point[]
}
