import React, {useState} from "react"
import Input from "../Input/Input"
import Button from "../Button/Button"
import "./form.css"

export default function Form () {
    const [passwordInputType, setPasswordInputType] = useState("password")

    function onClickShowPassword(event) {
        event.preventDefault()
        
        if(passwordInputType === "password") {
            setPasswordInputType("text")
        } else {
            setPasswordInputType("password")
        }

        console.log("it works!!")
    }

    return (
        <div>
            <h1 className="App-header">Form</h1>
            <form>
                <Input  label="Name:"
                        type="text"/>
                <Input  label="Email:"
                        type="email"/>
                <Input  label="Password:"
                        type={passwordInputType}
                        />
                <Input  label="Confirm password:"
                        type={passwordInputType}
                        />
                <Button className="form_button" 
                        label="Show password" 
                        onClick={onClickShowPassword}/>
                <Button className="form_button" 
                        label="Submit" />
            </form>
        </div>
        
    )
}