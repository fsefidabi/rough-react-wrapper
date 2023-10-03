import React, { memo, useCallback } from "react"
import { Renderer } from "../../Renderer"
import { RoughRendererType, RoughOutputType } from "../../Renderer/Renderer.types"
import { PathProps } from "./Path.interfaces"

function Path(props: PathProps): JSX.Element {
    const { d, ...rest } = props

    const renderProps = useCallback(
        (rc: RoughRendererType) => rc.path(d, rest),
        [d, rest]
    )

    return (
        <Renderer render={(rc: RoughRendererType): RoughOutputType => renderProps(rc)}/>
    )
}

Path.displayName = "Path"

export default memo(Path)
