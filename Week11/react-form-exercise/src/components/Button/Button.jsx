import React from "react"
import PropTypes from "prop-types"

export default function Button(props) {
    return (
        <button className={props.className} onClick={props.onClick}>{props.label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}