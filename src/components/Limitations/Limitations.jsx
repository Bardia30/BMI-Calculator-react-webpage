import React from 'react';
import LimitCard from './LimitCard';
import LimitationsLeft from './LimitationsLeft';
import LimitationsMiddle from './LimitationsMiddle';
import LimitationsBottom from './LimitationsBottom';

function Limitations() {
  return (
    <section className='limitations'>
        <LimitationsLeft />
        <LimitCard />
        <LimitationsMiddle />
        <LimitationsBottom />
    </section>
    

  )
}

export default Limitations