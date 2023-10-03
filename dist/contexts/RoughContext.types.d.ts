import { RefObject } from "react";
export type SvgRef = RefObject<SVGSVGElement>;
export type CanvasRef = RefObject<HTMLCanvasElement>;
export type RendererType = "canvas" | "svg";
export type RendererRefType = CanvasRef | SvgRef;
