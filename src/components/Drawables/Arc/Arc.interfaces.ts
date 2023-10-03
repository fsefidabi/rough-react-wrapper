import { Options } from "roughjs/bin/core"

export interface ArcProps extends Options {
    x: number
    y: number
    width: number
    height: number
    start: number
    stop: number
    closed?: boolean
}
