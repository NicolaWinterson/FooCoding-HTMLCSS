import React from 'react';
import Button from "./components/Button/Button"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Calculator app</h1>

      <div>
        <Button type="reset" value="CE" />
        <Button type="operand" value="÷" />
      </div>

      <div>
        <Button type="number" value="7" />
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

    </div>
  );
}

export default App;
