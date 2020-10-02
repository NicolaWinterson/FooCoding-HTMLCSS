import React from "react"
import PropTypes from "prop-types"

export default function Button(props) {
    return (
        <button className={props.className} onClick={props.onClick}>{props.label}</button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func
}