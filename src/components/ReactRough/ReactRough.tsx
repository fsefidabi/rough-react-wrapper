import React  from "react"
import { RoughProvider } from "../../contexts/RoughContext"

function ReactRough(props: object) {
    return (
        <RoughProvider {...props}/>
    )
}

ReactRough.displayName = "ReactRough"

export default ReactRough
