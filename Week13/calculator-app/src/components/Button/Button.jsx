import React from "react"
import PropTypes from "prop-types"
import "./button.css"

export default function Button({ type, onPress, buttonValue }) {
    console.log("I got created with" + onPress)
    if (type === 'operator') {
        return <button className="calculator-button_operand" type={type} onClick={onPress}>
            {buttonValue}
        </button>;
    }

    if (type === 'number') {
        return <button className="calculator-button" type={type} onClick={onPress}>
            {buttonValue}
        </button>;
    }

    if (type === 'clear') {
        return <button className="calculator-button_reset" type={type} onClick={onPress}>
            {buttonValue}
        </button>;
    }
    return <div>OOPS YOU BROKE IT {type}</div>;
}

Button.propTypes = {
    type: PropTypes.string,
    onPress: PropTypes.func,
    value: PropTypes.string
}
