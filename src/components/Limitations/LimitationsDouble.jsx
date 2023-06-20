import React from 'react';
import LimitCard from './LimitCard';


function LimitationsDouble({ cardObjFirst, cardObjSecond, iconFirst, iconSecond, sectionClass }) {
  return (
    <section className={sectionClass}>
            <LimitCard icon={iconFirst}
              alt={cardObjFirst.alt}
              title={cardObjFirst.title}
              description={cardObjFirst.description}/>
            <LimitCard 
              icon={iconSecond}
              alt={cardObjSecond.alt}
              title={cardObjSecond.title}
              description={cardObjSecond.description}
            />
        </section>
  )
}

export default LimitationsDouble