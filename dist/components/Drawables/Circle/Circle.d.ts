import React from "react";
import { CircleProps } from "./Circle.interfaces";
declare function Circle(props: CircleProps): JSX.Element;
declare namespace Circle {
    var displayName: string;
}
declare const _default: React.MemoExoticComponent<typeof Circle>;
export default _default;
