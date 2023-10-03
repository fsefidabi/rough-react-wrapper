import React, { memo, useCallback } from "react"
import { Renderer } from "../../Renderer"
import { RoughRendererType, RoughOutputType } from "../../Renderer/Renderer.types"
import { LinearPathProps } from "./LinearPath.interfaces"

function LinearPath(props: LinearPathProps): JSX.Element {
    const { points, ...rest } = props

    const renderProps = useCallback(
        (rc: RoughRendererType) => rc.linearPath(points, rest),
        [points, rest]
    )

    return (
        <Renderer render={(rc: RoughRendererType): RoughOutputType => renderProps(rc)}/>
    )
}

LinearPath.displayName = "LinearPath"

export default memo(LinearPath)
