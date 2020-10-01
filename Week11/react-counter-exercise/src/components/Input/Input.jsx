import React from "react"
import PropTypes from "prop-types"

export default function Input(props) {
    return (
        <>
            <label>{props.label}</label>
            <input type={props.type} value={props.value}></input>
        </>
        
    )
}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.number
}