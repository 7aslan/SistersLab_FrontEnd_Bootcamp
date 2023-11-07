import React, { useState } from 'react'

const Calculator = () => {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const addNumbers = () => {
    setResult(Number(num1)+Number(num2))
  };
  const subNumbers = () => {
    setResult(num1-num2);
  };
  const multNumbers = () => {
    setResult(num1*num2);
  };
  const divNumbers = () => {
    if(num2 !== 0){
      setResult(num1/num2)
    }else{
      setResult("Division by zero is not allowed !")
    }
  }
  return (
    <div>
      <h1>Welcome to Calculator App</h1>
      <div>
        <input type="number" value={num1} onChange={(e)=>setNum1(e.target.value)}/>
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)}/>
      </div>
      <div>
        <button onClick={addNumbers}>Adding</button>
        <button onClick={subNumbers}>Substraction</button>
        <button onClick={multNumbers}>Multiplication</button>
        <button onClick={divNumbers}>Division</button>
      </div>
      <div>
        <p>Result: {result}</p>
      </div>







    </div>
  )
}

export default Calculator;