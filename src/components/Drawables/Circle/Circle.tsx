import React, { memo, useCallback } from "react"
import { Renderer } from "../../Renderer"
import { RoughRendererType, RoughOutputType } from "../../Renderer/Renderer.types"
import { CircleProps } from "./Circle.interfaces"

function Circle(props: CircleProps): JSX.Element {
    const { x, y, diameter, ...rest } = props

    const renderProps = useCallback(
        (rc: RoughRendererType) => rc.circle(x, y, diameter, rest),
        [x, y, diameter, rest]
    )

    return (
        <Renderer render={(rc: RoughRendererType): RoughOutputType => renderProps(rc)}/>
    )
}

Circle.displayName = "Circle"

export default memo(Circle)
