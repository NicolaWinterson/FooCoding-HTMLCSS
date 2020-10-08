import React, { useContext } from "react"
import { NumberContext } from "./NumberProvider";
import PropTypes from "prop-types"

const NumberButton = ({ buttonValue }) => {
    const { handleSetDisplayValue } = useContext(NumberContext);
    return (
        <button type="button" onClick={() => handleSetDisplayValue(buttonValue)}>
            {buttonValue}
        </button>
    )
}

NumberButton.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
}

export default NumberButton;