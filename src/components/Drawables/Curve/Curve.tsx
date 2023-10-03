import React, { memo, useCallback } from "react"
import { Renderer } from "../../Renderer"
import { RoughRendererType, RoughOutputType } from "../../Renderer/Renderer.types"
import { CurveProps } from "./Curve.interfaces"

function Curve(props: CurveProps): JSX.Element {
    const { points, ...rest } = props

    const renderProps = useCallback(
        (rc: RoughRendererType) => rc.curve(points, rest),
        [points, rest]
    )

    return (
        <Renderer render={(rc: RoughRendererType): RoughOutputType => renderProps(rc)}/>
    )
}

Curve.displayName = "Curve"

export default memo(Curve)
