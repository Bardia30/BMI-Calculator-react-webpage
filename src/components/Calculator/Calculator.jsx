import React from 'react';
import CalculatorRight from './CalculatorLeft';
import CalculatorLeft from './CalculatorRight';
import "./Calculator.scss";

function Calculator() {
  return (
    <section className='calculator'>
        <CalculatorRight />
        <CalculatorLeft />
    </section>
  )
}

export default Calculator