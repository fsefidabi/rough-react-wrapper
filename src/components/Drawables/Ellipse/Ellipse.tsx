import React, { memo, useCallback } from "react"
import { Renderer } from "../../Renderer"
import { RoughRendererType, RoughOutputType } from "../../Renderer/Renderer.types"
import { EllipseProps } from "./Ellipse.interfaces"

function Ellipse(props: EllipseProps): JSX.Element {
    const { x, y, width, height, ...rest } = props

    const renderProps = useCallback(
        (rc: RoughRendererType) => rc.ellipse(x, y, width, height, rest),
        [x, y, width, height, rest]
    )

    return (
        <Renderer render={(rc: RoughRendererType): RoughOutputType => renderProps(rc)}/>
    )
}

Ellipse.displayName = "Ellipse"

export default memo(Ellipse)
