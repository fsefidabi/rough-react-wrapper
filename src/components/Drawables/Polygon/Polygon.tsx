import React, { memo, useCallback } from "react"
import { Renderer } from "../../Renderer"
import { RoughRendererType, RoughOutputType } from "../../Renderer/Renderer.types"
import { PolygonProps } from "./Polygon.interfaces"

function Polygon(props: PolygonProps): JSX.Element {
    const { points, ...rest } = props

    const renderProps = useCallback(
        (rc: RoughRendererType) => rc.polygon(points, rest),
        [points, rest]
    )

    return (
        <Renderer render={(rc: RoughRendererType): RoughOutputType => renderProps(rc)}/>
    )
}

Polygon.displayName = "Polygon"

export default memo(Polygon)
