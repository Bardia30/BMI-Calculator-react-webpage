import React, { useState } from 'react';
import Form from './Form';
import Results from './Results';

function CalculatorRight() {
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  

  return (
    <section className='calculator__right-section'> 
        <h3 className='calculator__prompt'>Enter your details below</h3>
        <Form isInputEmpty={isInputEmpty} setIsInputEmpty={setIsInputEmpty}/>
        <Results isInputEmpty={isInputEmpty}/>
    </section>
  )
}

export default CalculatorRight