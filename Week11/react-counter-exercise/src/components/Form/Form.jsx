import React, { useState } from "react"
import Button from "../Button/Button"
import Input from "../Input/Input"
import "./Form.css"

export default function Form() {

    const [counterState, setCounterState] = useState(0)
    
    const incrementCounter = () => setCounterState(counterState + getValue());
    const decrementCounter = () => setCounterState(counterState - 1);

    const getValue = () => {
        /* event.preventDefault() */
        return 39
    }

    return (
        <>
            <Input label="How much would you like to add or subtract?" type="number" />
            <p>Your total is: {counterState}</p>
            <Button className="form-button" label="+" onClick={incrementCounter} />
            <Button className="form-button" label="-" onClick={decrementCounter} />
        </>
    )
}