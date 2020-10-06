import React from "react"
import PropTypes from "prop-types"

export default function Button ({type, value}) {
    return (
        <button type={type} >{value}</button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string
}
