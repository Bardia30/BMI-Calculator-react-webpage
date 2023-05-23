import React from 'react';
import Form from './Form';
import Results from './Results';

function CalculatorRight() {
  return (
    <section className='calculator__right-section'> 
        <h3 className='calculator__prompt'>Enter your details below</h3>
        <Form />
        <Results />
    </section>
  )
}

export default CalculatorRight