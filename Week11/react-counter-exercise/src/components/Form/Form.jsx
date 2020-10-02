import React, { useState } from "react"
import Button from "../Button/Button"
import Input from "../Input/Input"
import "./Form.css"

export default function Form() {

    const [counterState, setCounterState] = useState(0)
    const [number, setNumber] = useState(0)
    
    const incrementCounter = () => setCounterState(counterState + number);
    const decrementCounter = () => setCounterState(counterState - number);

    const getValue = (event) => {
        event.preventDefault()
        setNumber(parseInt(event.target.value))
        console.log(typeof event.target.value)
    }

    return (
        <>
            <p>{number}</p>
            <Input label="How much would you like to add or subtract?" type="number" value={number} onChange={getValue} />
            <p>Your total is: {counterState}</p>
            <Button className="form-button" label="+" onClick={incrementCounter} />
            <Button className="form-button" label="-" onClick={decrementCounter} />
        </>
    )
}