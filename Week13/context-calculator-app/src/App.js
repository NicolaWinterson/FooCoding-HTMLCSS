import React from 'react';
import Calculator from "./components/Calculator";
import NumberProvider from "./components/NumberProvider";
import './App.css';

const App = () => {
  return (
    <NumberProvider>
      <Calculator />
    </NumberProvider>
  );
}

export default App;
