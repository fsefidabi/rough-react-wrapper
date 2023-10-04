import { RoughOutputType, RoughRendererType } from "./Renderer.types"

export interface RendererProps {
    render: (rc: RoughRendererType) => RoughOutputType
}
