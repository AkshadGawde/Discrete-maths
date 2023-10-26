import React, { useState } from 'react';
import './App.css';

function TransitivityCalculator() {
  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');
  const [inputC, setInputC] = useState('');
  const [result, setResult] = useState('');

  const checkTransitivity = () => {
    const valueA = parseInt(inputA);
    const valueB = parseInt(inputB);
    const valueC = parseInt(inputC);

    if (!isNaN(valueA) && !isNaN(valueB) && !isNaN(valueC)) {
      if (valueA <= valueB && valueB <= valueC) {
        setResult('The relation is transitive.');
      } else if (valueA === valueB && valueB === valueC) {
        setResult('The relation is intransitive.');
      } else {
        setResult('The relation is neither transitive nor intransitive.');
      }
    } else {
      setResult('Please enter valid numeric values for A, B, and C.');
    }
  };

  const handleCalculate = () => {
    checkTransitivity();
  };

  const handleClear = () => {
    setInputA('');
    setInputB('');
    setInputC('');
    setResult('');
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Transitivity Checker</h1>
        <div className="input-container">
          <label>A:</label>
          <input
            type="number"
            value={inputA}
            onChange={(e) => setInputA(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>B:</label>
          <input
            type="number"
            value={inputB}
            onChange={(e) => setInputB(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>C:</label>
          <input
            type="number"
            value={inputC}
            onChange={(e) => setInputC(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button onClick={handleCalculate}>Check Transitivity</button>
          <button onClick={handleClear} className="clear-button">Clear</button>
        </div>
        <div className="result">{result}</div>
      </div>
    </div>
  );
}

export default TransitivityCalculator;