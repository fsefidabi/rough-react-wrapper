/// <reference types="react" />
import { RendererRefType, RendererType } from "./RoughContext.types";
import { Config } from "roughjs/bin/core";
export interface RoughContextProps {
    type: RendererType;
    width?: number;
    height?: number;
    ref?: RendererRefType;
    config?: Config;
}
export interface RoughProviderProps {
    width?: number;
    height?: number;
    config?: Config;
    renderer?: RendererType;
    children?: JSX.Element;
}
