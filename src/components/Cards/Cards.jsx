import React from 'react';
import Card from './Card';
import cardsData from './cardsData';
import './Card.scss';


function Cards() {
  return (
    <section className='cards'>
        {cardsData.map(card => (
            <Card key={card.id} title={card.title} description={card.description} icon={card.icon}/>
        ))}
    </section>
  )
}

export default Cards;