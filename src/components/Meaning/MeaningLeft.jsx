import React from 'react'
import eatingMan from '../../assets/images/image-man-eating.webp';


function MeaningLeft() {
  return (
    <section className='meaning__left-section'>
        <img className='meaning__eating-man' src={eatingMan} alt="man-eating" />
    </section>
  )
}

export default MeaningLeft