import React from "react"
import PropTypes from "prop-types"

export default function Button ({type, onClick, value}) {
    return (
        <button type={type} onClick={onClick}>{value}</button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    value: PropTypes.string
}
