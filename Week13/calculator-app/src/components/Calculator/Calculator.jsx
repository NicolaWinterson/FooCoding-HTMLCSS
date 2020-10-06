import React, {useState} from 'react';
import Button from "../Button/Button"
import Output from "../Output/Output"

export default function Calculator() {
    const [number, setNumber] = useState("")
    const [value, setValue] = useState("")

    const handleChange = (event) => {
        setNumber(event.target.value)
    }

    const logValue = () => {
        setValue(number)
        console.log("hello" + number)
    }
    return (
        <> 
        <Output onChange={handleChange} value={number}/>
      <div>
        <Button type="reset" value="CE" />
        <Button type="operand" value="÷" />
      </div>

      <div>
        <Button type="number" onClick={logValue} value="7" />
        <Button type="number" value="8" />
        <Button type="number" value="9" />
        <Button type="operand" value="X" />
      </div>

      <div>
        <Button type="number" value="4" />
        <Button type="number" value="5" />
        <Button type="number" value="6" />
        <Button type="operand" value="-" />
      </div>

      <div>
        <Button type="number" value="1" />
        <Button type="number" value="2" />
        <Button type="number" value="3" />
        <Button type="operand" value="+" />
      </div>

      <div>
        <Button type="number" value="0" />
        <Button type="operand" value="=" />
      </div>
        
        
        </>
    )

}
