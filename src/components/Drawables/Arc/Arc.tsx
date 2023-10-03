import React, { memo, useCallback } from "react"
import { Renderer } from "../../Renderer"
import { RoughRendererType, RoughOutputType } from "../../Renderer/Renderer.types"
import { ArcProps } from "./Arc.interfaces"

function Arc(props: ArcProps): JSX.Element {
    const { x, y, width, height, start, stop, closed, ...rest } = props

    const renderProps = useCallback(
        (rc: RoughRendererType) => rc.arc(x, y, width, height, start, stop, closed, rest),
        [x, y, width, height, start, stop, closed, rest]
    )

    return (
        <Renderer render={(rc: RoughRendererType): RoughOutputType => renderProps(rc)}/>
    )
}

Arc.displayName = "Arc"

export default memo(Arc)
