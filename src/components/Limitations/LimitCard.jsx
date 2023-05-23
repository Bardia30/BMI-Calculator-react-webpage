import React from 'react'

function LimitCard(props) {
  return (
    <section className='limit-card'>
        <section className='limit-card__upper-section'>
            <img className='limit-card__icon' src={props.icon} alt={props.alt} />
            <h3 className='limit-card__title'>{props.title}</h3>
        </section>
        <p className='limit-card__description'>{props.description}</p>
    </section>
  )
}

export default LimitCard;