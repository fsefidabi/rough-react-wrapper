import React from "react";
import { RectangleProps } from "./Rectangle.interfaces";
declare function Rectangle(props: RectangleProps): JSX.Element;
declare namespace Rectangle {
    var displayName: string;
}
declare const _default: React.MemoExoticComponent<typeof Rectangle>;
export default _default;
