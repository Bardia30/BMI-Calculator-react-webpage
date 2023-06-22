import React from 'react';
import './Limitations.scss';

function LimitCard({ icon, alt, title, description }) {
  return (
    <section className='limit-card'>
        <section className='limit-card__upper-section'>
            <img className='limit-card__icon' src={icon} alt={alt} />
            <h3 className='limit-card__title'>{title}</h3>
        </section>
        <p className='limit-card__description'>{description}</p>
    </section>
  )
}

export default LimitCard;