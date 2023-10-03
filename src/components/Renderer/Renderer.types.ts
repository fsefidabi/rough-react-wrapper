import { RoughCanvas } from "roughjs/bin/canvas"
import { RoughSVG } from "roughjs/bin/svg"
import { Drawable } from "roughjs/bin/core"

export type RoughRendererType = RoughCanvas | RoughSVG
export type RoughOutputType = Node | Drawable | SVGGElement | void
