import React from 'react';

function Card(props) {
  return (
    <section className='card'>
        <img className="card__icon" src={props.icon} alt="healthy-eating" />
        <h3 className="card__title">{props.title}</h3>
        <p className="card__description">{props.description}</p>
    </section>
  )
}

export default Card