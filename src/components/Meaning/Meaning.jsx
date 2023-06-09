import React from 'react';
import curvedLineRight from '../../assets/images/pattern-curved-line-left.svg';
import eatingMan from '../../assets/images/image-man-eating.webp';
import './Meaning.scss';

function Meaning() {
  return (
    <section className='meaning'>
      <img className='meaning__eating-man' src={eatingMan} alt="man-eating" />
      <section className='meaning__right-section'>
        <img className="meaning__arc-logo" src={curvedLineRight} alt="curved-line" />
        <h2 className="meaning__title">What your BMI result means</h2>
        <p className="meaning__description">
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a 
            healthy weight may lower your chances of experiencing health issues later on, 
            such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced 
            fat and sugar content, incorporating ample fruits and vegetables. Additionally, 
            strive for regular physical activity, ideally about 30 minutes daily for 
            five days a week.
        </p>
      </section>
    </section>
  )
}

export default Meaning