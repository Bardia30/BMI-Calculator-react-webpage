import React from 'react';
import LimitCard from './LimitCard';
import curvedLineLeft from '../../assets/images/pattern-curved-line-left.svg';

function LimitationsMiddle() {
  return (
    <section className='limitations__middle-section'>
            <img src={curvedLineLeft} alt="curved-line-left" />
            <LimitCard />
            <LimitCard />
        </section>
  )
}

export default LimitationsMiddle