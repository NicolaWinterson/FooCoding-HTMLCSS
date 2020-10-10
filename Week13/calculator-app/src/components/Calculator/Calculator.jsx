import React, { useState } from 'react';
import Button from "../Button/Button"
import Display from "../Display/Display"
import Row from "../Row/Row"
import RowItem from "../RowItem/RowItem"
import "./calculator.css"

export default function Calculator() {
    const [currentValue, setCurrentValue] = useState("0");
    const [operator, setOperator] = useState(null)
    const [previousValue, setPreviousValue] = useState(null)

    const handleTap = (type, value) => {
        
        console.log("currentValue =" + currentValue)

        if (type === "number") {
            setCurrentValue(`${currentValue}${value}`)
        }
        if (type === "operator") {
            setOperator(value)
            setPreviousValue(currentValue)
            setCurrentValue("0")
        }
        if (type === "clear") {
            setCurrentValue("0")
            setOperator(null)
            setPreviousValue(null)
        }
        if (type === "backspace") {
            const deletedNumber = currentValue.slice(0, currentValue.length - 1);
            setCurrentValue(deletedNumber)
        }

        if (type === "equal") {
            const current = parseFloat(currentValue)
            const previous = parseFloat(previousValue)

            if (operator === "+") {
                setCurrentValue(previous + current)
                setOperator(null)
                setPreviousValue(null)
            }
            if (operator === "/") {
                setCurrentValue(previous / current)
                setOperator(null)
                setPreviousValue(null)
            }
            if (operator === "-") {
                setCurrentValue(previous - current)
                setOperator(null)
                setPreviousValue(null)
            }
            if (operator === "*") {
                setCurrentValue(previous * current)
                setOperator(null)
                setPreviousValue(null)
            }

        }
    }

    return (
        <div className="calculator-container">
            <Display>{currentValue}</Display>
            <Row>
                <Button className="calculator-button_reset" type="clear" buttonValue="CE" onPress={() => {handleTap("clear")}} />
                <Button className="calculator-button_reset_wide" type="clear" buttonValue="<" onPress={() => {handleTap("backspace")}} />               
                <Button className="calculator-button_operand" type="operator" buttonValue="÷" onPress={() => {handleTap("operator", "/")}} />
            </Row>
            
            <Row>
                <Button className="calculator-button" type="number" buttonValue="7" onPress={() => {handleTap("number", 7)}} />
                <Button className="calculator-button" type="number" buttonValue="8" onPress={() => {handleTap("number", 8)}} />
                <Button className="calculator-button" type="number" buttonValue="9" onPress={() => {handleTap("number", 9)}} />
                <Button className="calculator-button_operand" type="operator" buttonValue="x" onPress={() => {handleTap("operator", "*")}} />
            </Row>

            <Row>
                <Button className="calculator-button" type="number" buttonValue="4" onPress={() => {handleTap("number", 4)}} />
                <Button className="calculator-button" type="number" buttonValue="5" onPress={() => {handleTap("number", 5)}} />
                <Button className="calculator-button" type="number" buttonValue="6" onPress={() => {handleTap("number", 6)}} />
                <Button className="calculator-button_operand" type="operator" buttonValue="-" onPress={() => {handleTap("operator", "-")}} />
            </Row>

            <Row>
                <Button className="calculator-button" type="number" buttonValue="1" onPress={() => {handleTap("number", 1)}} />
                <Button className="calculator-button" type="number" buttonValue="2" onPress={() => {handleTap("number", 2)}} />
                <Button className="calculator-button" type="number" buttonValue="3" onPress={() => {handleTap("number", 3)}} />
                <Button className="calculator-button_operand" type="operator" buttonValue="+" onPress={() => {handleTap("operator", "+")}} />
            </Row>

            <Row>
                <Button className="calculator-button_operand" type="operator" buttonValue="." onPress={() => {handleTap("number", ".")}} />
                <Button className="calculator-button_wide" type="number" buttonValue="0" onPress={() => {handleTap("number", 0)}} />
                <Button className="calculator-button_operand" type="operator" buttonValue="=" onPress={() => {handleTap("equal")}} />
            </Row>
        </div>
    )

}
