import React from "react"
import PropTypes from "prop-types"
import "./button.css"

export default function Button({ type, onClick, value }) {
    if (type === 'operand') {
        return <button className="calculator-button_operand" type={type} onClick={onClick}>
            {value}
        </button>;
    }

    if (type === 'number') {
        return <button className="calculator-button" type={type} onClick={onClick}>
            {value}
        </button>;
    }

    if (type === 'reset') {
        return <button className="calculator-button_reset" type={type} onClick={onClick}>
            {value}
        </button>;
    }

}

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    value: PropTypes.string
}
