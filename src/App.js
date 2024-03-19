import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const calculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  return (
    <div className="calculator">
      <input type="text" value={display} readOnly />
      
      <div className="buttons">
        <button onClick={clearDisplay}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;
