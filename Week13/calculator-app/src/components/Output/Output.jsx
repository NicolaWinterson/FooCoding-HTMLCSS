import React from "react"
import PropTypes from "prop-types"
import "./output.css"

export default function Output ({value, onChange}) {
    return (
        <input className="calculator-output" value={value} onChange={onChange}></input>
    )
}

Output.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
}
