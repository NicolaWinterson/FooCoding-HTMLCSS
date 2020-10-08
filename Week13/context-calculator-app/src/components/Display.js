import React, {useContext} from "react";
import {NumberContext} from "./NumberProvider"
import CalculatorStyles from "../components/CalculatorStyles/CalculatorStyles"
import Calculator from "./Calculator";

const Display = () => {
    const { number, storedNumber, functionType } = useContext(NumberContext);
    return (
        <CalculatorStyles> 
                  <h2 className={storedNumber && storedNumber.length > 12 ? 'long-main-display' : undefined}>
                    {!number.length && !storedNumber ? '0' : number || storedNumber}
                  </h2>
                  <p className={storedNumber && storedNumber.length > 12 ? 'long-stored-display' : undefined}>
                  {!storedNumber ? 'ENTER SOME NUMBERS' : `${storedNumber} ${functionType} ${number}`}
                  </p>
        </CalculatorStyles>
    )
}

export default Display;