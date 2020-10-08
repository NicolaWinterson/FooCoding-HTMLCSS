import React, { useContext } from "react"
import { NumberContext } from './NumberProvider';
import PropTypes from "prop-types"

const FunctionButton = ({buttonValue}) => {

    const { handleSetCalcFunction } = useContext(NumberContext);
    
    return (
        <button className="function-button" type="button" onClick={() => handleSetCalcFunction(buttonValue)}>
            {buttonValue}
        </button>
    )
}

FunctionButton.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
}

export default FunctionButton;