import React, { memo, useCallback } from "react"
import { Renderer } from "../../Renderer"
import { RoughRendererType, RoughOutputType } from "../../Renderer/Renderer.types"
import { LineProps } from "./Line.interfaces"

function Line(props: LineProps): JSX.Element {
    const { x1, y1, x2, y2, ...rest } = props

    const renderProps = useCallback(
        (rc: RoughRendererType) => rc.line(x1, y1, x2, y2, rest),
        [x1, y1, x2, y2, rest]
    )

    return (
        <Renderer render={(rc: RoughRendererType): RoughOutputType => renderProps(rc)}/>
    )
}

Line.displayName = "Line"

export default memo(Line)
