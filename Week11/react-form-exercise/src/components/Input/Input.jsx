import React from "react"
import PropTypes from "prop-types"

const Input = (props) => {
    return (
        <div className="form">
            <label>{props.label}</label>
            <input className="form--input" type={props.type}></input>
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string
}

export default Input