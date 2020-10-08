import React, { useState } from 'react';
import Button from "../Button/Button"
import Output from "../Output/Output"
import Row from "../Row/Row"
import RowItem from "../RowItem/RowItem"
import "./calculator.css"

export default function Calculator() {
    const [data, setData] = useState("")

    const logValue = (event) => setData(data + event.target.value)

    return (
        <div className="calculator-container">
            <Output value={data} />
            <Row>
                <RowItem><Button type="reset" value="CE" /></RowItem>
                <Button type="operand" value="÷" />
            </Row>

            <Row>
                <Button type="number" value="7" onClick={logValue} />
                <Button type="number" value="8" />
                <Button type="number" value="9" />
                <Button type="operand" value="x" />
            </Row>

            <Row>
                <Button type="number" value="4" />
                <Button type="number" value="5" />
                <Button type="number" value="6" />
                <Button type="operand" value="-" />
            </Row>

            <Row>
                <Button type="number" value="1" />
                <Button type="number" value="2" />
                <Button type="number" value="3" />
                <Button type="operand" value="+" />
            </Row>

            <Row>
                <Button type="number" value="0" />
                <Button type="operand" value="=" />
            </Row>


        </div>
    )

}
