import React from 'react';

function Card(props) {
  return (
    <section className='card'>
        <img class="card__icon" src={props.icon} alt="healthy-eating" />
        <h3 class="card__title">{props.description}</h3>
        <p class="card__description">{props.description}</p>
    </section>
  )
}

export default Card