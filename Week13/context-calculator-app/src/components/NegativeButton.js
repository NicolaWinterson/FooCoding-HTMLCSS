import React, { useContext } from 'react';
import { NumberContext } from "./NumberProvider"
import PropTypes from "prop-types"

const NegativeButton = () => {
    const { handleToggleNegative } = useContext(NumberContext);
    return (
        <button type="button" className="white-button" onClick={() => handleToggleNegative()}>        -/+
        </button>
    )
}

NegativeButton.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
}

export default NegativeButton;