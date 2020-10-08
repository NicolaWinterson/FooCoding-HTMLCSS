import React, { useContext } from "react"
import { NumberContext } from "./NumberProvider"
import PropTypes from "prop-types"

const ClearButton = () => {
    const { handleClearValue } = useContext(NumberContext)
    return (
        <button 
            type="button"
            className="white-button"
            onClick={() => handleClearValue()}>
                    C
        </button>
    )
}

ClearButton.propTypes = {
    type: PropTypes.string
}

export default ClearButton;