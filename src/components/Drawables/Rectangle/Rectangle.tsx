import React, { memo, useCallback } from "react"
import { Renderer } from "../../Renderer"
import { RoughRendererType, RoughOutputType } from "../../Renderer/Renderer.types"
import { RectangleProps } from "./Rectangle.interfaces"

function Rectangle(props: RectangleProps): JSX.Element {
    const { x, y, width, height, ...rest } = props

    const renderProps = useCallback(
        (rc: RoughRendererType) => rc.rectangle(x, y, width, height, rest),
        [x, y, width, height, rest]
    )

    return (
        <Renderer render={(rc: RoughRendererType): RoughOutputType => renderProps(rc)}/>
    )
}

Rectangle.displayName = "Rectangle"

export default memo(Rectangle)
