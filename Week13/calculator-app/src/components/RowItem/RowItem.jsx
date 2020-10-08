import React from "react"
import { Children } from "react"

export default function RowItem ({children}) {
    return (
        <div className="calculator-rowItem">{children}</div>
    )
}