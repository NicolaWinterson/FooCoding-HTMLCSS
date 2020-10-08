import React, {useContext} from "react"
import { NumberContext } from './NumberProvider';
import PropTypes from "prop-types"

const EqualButton = () => {
    const { doMath } = useContext(NumberContext);
    return (
        <button className="white-button" type="button" onClick={() => doMath()}>
            =
        </button>
    )
}

EqualButton.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
}

export default EqualButton;