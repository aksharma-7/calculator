import React, { useState } from 'react';

const Calculator = () => {
  const [output, setOutput] = useState();
  const [operator, setOperator] = useState('');
  const [equalOperator, setEqualOperator] = useState('');
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);

  const handleOutput = (e) => {
    let total = 0;
    if (!operand1) {
      setOperand1(e.target.innerHTML);
    }

    if (operator) {
      setOperand2(e.target.innerHTML);
    }

    if (operator === '+') {
      total = operand1 + operand2;
    }
    if (operator === '-') {
      total = operand1 - operand2;
    }
    if (operator === 'x') {
      total = operand1 * operand2;
    }
    if (operator === '/') {
      total = operand1 / operand2;
    }
    setOutput(total);
  };

  const handleClear = () => {
    setOutput();
    setOperator('');
    setEqualOperator('');
    setOperand1(0);
    setOperand2(0);
  };

  return (
    <div className='container'>
      {equalOperator ? <h3 className='output'>output: {output}</h3> : null}
      <div className='key-container'>
        <div>
          <div className='key-row'>
            <span value='1' className='key' onClick={handleOutput}>
              1
            </span>
            <span value={2} className='key' onClick={handleOutput}>
              2
            </span>
            <span value={3} className='key' onClick={handleOutput}>
              3
            </span>
          </div>
          <div className='key-row'>
            <span value={4} className='key' onClick={handleOutput}>
              4
            </span>
            <span value={5} className='key' onClick={handleOutput}>
              5
            </span>
            <span value={6} className='key' onClick={handleOutput}>
              6
            </span>
          </div>
          <div className='key-row'>
            <span value={7} className='key' onClick={handleOutput}>
              7
            </span>
            <span value={8} className='key' onClick={handleOutput}>
              8
            </span>
            <span value={9} className='key' onClick={handleOutput}>
              9
            </span>
          </div>
          <div className='key-row'>
            <span value='C' className='key' onClick={handleClear}>
              C
            </span>
            <span value={0} className='key' onClick={handleOutput}>
              0
            </span>

            <span
              value='='
              className='key'
              onClick={(e) => {
                setEqualOperator(e.target.innerHTML);
                handleOutput(e);
              }}
            >
              =
            </span>
          </div>
        </div>
        <div className='operator'>
          <span
            value='x'
            className='key'
            onClick={(e) => setOperator(e.target.innerHTML)}
          >
            x
          </span>
          <span
            value='-'
            className='key'
            onClick={(e) => setOperator(e.target.innerHTML)}
          >
            -
          </span>
          <span
            value='+'
            className='key'
            onClick={(e) => setOperator(e.target.innerHTML)}
          >
            +
          </span>
          <span
            value='/'
            className='key'
            onClick={(e) => setOperator(e.target.innerHTML)}
          >
            /
          </span>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
