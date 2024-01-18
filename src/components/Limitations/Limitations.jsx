import {useState, useEffect} from 'react';
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

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const [isTablet, setIsTablet] = useState(false);

  const handleResize = () => {
    setViewportWidth(window.innerWidth);
    if (window.innerWidth < 1440) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
  }


  useEffect(()=> {
    handleResize();
  }, []);

  useEffect(()=>{
    window.onload = () => {
      handleResize();
    };
    window.addEventListener('resize', handleResize);
  }, [viewportWidth])



  if (!isTablet) {
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
} else {
  return (
    <section className='limitations limitations--mobile'>
    <LimitationsLeft />
      <LimitCard 
          icon={iconGender}
          alt={limitData[0].alt}
          title={limitData[0].title}
          description={limitData[0].description}
          limitClass='upper'
        />
        <LimitCard 
          icon={iconAge}
          alt={limitData[1].alt}
          title={limitData[1].title}
          description={limitData[1].description}
          limitClass='upper'
        />
        <LimitCard 
          icon={iconMuscle}
          alt={limitData[2].alt}
          title={limitData[2].title}
          description={limitData[2].description}
          limitClass='upper'
        />
        <LimitCard 
          icon={iconPreg}
          alt={limitData[3].alt}
          title={limitData[3].title}
          description={limitData[3].description}
          limitClass='upper'
        />
        <LimitCard 
          icon={iconRace}
          alt={limitData[4].alt}
          title={limitData[4].title}
          description={limitData[4].description}
          limitClass='upper'
        />
    </section>
  )
}
}

export default Limitations