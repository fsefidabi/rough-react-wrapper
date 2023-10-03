import React, { createContext, useContext, useRef } from "react"
import { RoughContextProps, RoughProviderProps } from "./RoughContext.interfaces"
import { CanvasRef, SvgRef } from "./RoughContext.types"

const RoughContext = createContext<RoughContextProps>({
    type: "canvas",
    width: 300,
    height: 150
})
RoughContext.displayName = "RoughContext"

export function RoughProvider(props: RoughProviderProps) {
    const {
        config,
        width = 300,
        height = 150,
        renderer = "canvas",
        children = null
    } = props

    const svgRef = useRef<SVGSVGElement>()
    const canvasRef = useRef<HTMLCanvasElement>()

    function getRefObject(renderer: string) {
        switch (renderer) {
            case "svg":
                return svgRef as SvgRef
            case "canvas":
                return canvasRef as CanvasRef
            default:
                throw new Error(`unsupported renderer type: ${renderer}`)
        }
    }

    function getCorrespondJsx(renderer: string) {
        switch (renderer) {
            case "svg":
                return (
                    <svg width={width} height={height} ref={svgRef as SvgRef}>
                        {children}
                    </svg>
                )
            case "canvas":
                return (
                    <canvas width={width} height={height} ref={canvasRef as CanvasRef}>
                        {children}
                    </canvas>
                )
            default:
                throw new Error(`unsupported renderer type: ${renderer}`)
        }
    }

    return (
        <RoughContext.Provider
            value={{
                config,
                width,
                height,
                type: renderer,
                ref: getRefObject(renderer)
            }}
        >
            {getCorrespondJsx(renderer)}
        </RoughContext.Provider>
    )
}

export function useRoughContext(): RoughContextProps {
    const context = useContext(RoughContext)
    if (!context) {
        throw new Error("useRoughContext must be used within a RoughProvider")
    }
    return context
}
