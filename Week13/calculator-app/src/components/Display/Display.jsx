import React from "react"
import PropTypes from "prop-types"
import "./display.css"

export default function Display ({ children }) {
    return (
    <div className="calculator-output">{children}</div>
    )
}

Display.propTypes = {
    value: PropTypes.string,
}
