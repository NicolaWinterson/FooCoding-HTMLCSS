import React, { useContext } from "react"
import { NumberContext } from "./NumberProvider"
import PropTypes from "prop-types"

const BackButton = () => {
    const { handleBackButton } = useContext(NumberContext)
    return (
        <button 
            type="button" 
            className="white-button" 
            onClick={() => handleBackButton()}>
        &#8592;
        </button>
                )
}

BackButton.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string
}

export default BackButton;