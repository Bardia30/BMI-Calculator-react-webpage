import React from 'react';
import LimitCard from './LimitCard';
import LimitationsLeft from './LimitationsLeft';
import LimitationsDouble from './LimitationsDouble';
import limitData from './LimitData.json';
import iconGender from '../../assets/images/icon-gender.svg';
import iconAge from '../../assets/images/icon-age.svg';
import iconMuscle from '../../assets/images/icon-muscle.svg';
import iconPreg from '../../assets/images/icon-pregnancy.svg';
import iconRace from '../../assets/images/icon-race.svg';
import arc from '../../assets/images/pattern-curved-line-right.svg'
// import './Limitations.scss';

function Limitations() {
  return (
    <section className='limitations'>
      <section className='limitations__upper'>
        <LimitationsLeft />
        <LimitCard 
          icon={iconGender}
          alt={limitData[0].alt}
          title={limitData[0].title}
          description={limitData[0].description}
          limitClass='upper'
        />
      </section>
      <section className='limitations__mid-section'>
        <img className='limitations__curve' src={arc} alt="curved-line" />
        <LimitationsDouble sectionClass="limitations__middle-section" iconFirst={iconAge} iconSecond={iconMuscle} cardObjFirst={limitData[1]} cardObjSecond={limitData[2]}/>
      </section>
      <LimitationsDouble sectionClass="limitations__bottom-section" iconFirst={iconPreg} iconSecond={iconRace} cardObjFirst={limitData[3]} cardObjSecond={limitData[4]}/>
    </section>
    

  )
}

export default Limitations