import React from "react"
import PropTypes from "prop-types"
import "./display.css"

export default function Output ({value, onChange}) {
    return (
        <div className="calculator-output" value={value} onChange={onChange}></div>
    )
}

Output.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
}
