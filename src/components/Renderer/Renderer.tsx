import { RoughSVG } from "roughjs/bin/svg"
import { RoughCanvas } from "roughjs/bin/canvas"
import useDeepCompareEffect from "use-deep-compare-effect"
import { useRoughContext } from "../../contexts"
import { RendererProps } from "./Renderer.interfaces"

function Renderer({ render }: RendererProps): JSX.Element | null {
    const { ref, config, width, height, type } = useRoughContext()

    const clearCanvas = (): void => {
        if (!(width && height)) {
            throw new Error("Canvas should have a defined width and height")
        }
        const canvas = ref && (ref.current as HTMLCanvasElement)
        const ctx = canvas && canvas.getContext("2d")
        ctx && ctx.clearRect(0, 0, width, height)
    }

    useDeepCompareEffect((): any => {
        const rendererElement = ref && ref.current

        if (!rendererElement) return

        if (type === "svg") {
            const roughSvg = new RoughSVG(rendererElement as SVGSVGElement, config)
            const node = render(roughSvg) as Node
            rendererElement.appendChild(node)

            return (): void => {
                rendererElement.removeChild(node)
            }
        } else {
            const roughCanvas = new RoughCanvas(rendererElement as HTMLCanvasElement, config)
            render(roughCanvas)
        }
    }, [ref, config, render, type])

    if (type === "canvas") clearCanvas()
    return null
}

export default Renderer
