import { useEffect, useState } from 'react'

function Results({ isInputEmpty, userInputs }) {

  const [result, setResult] = useState("");


  const bmiCalculatorMetric = (weight, height) => {
    const bmi = (weight / ((height) ** 2)).toFixed(1);

    return parseFloat(bmi);
  }

  const bmiCalculatorImperial = (feet, inch, stone, lbs) => {
    const height = (feet * 12) + inch;
    const weight = (stone * 14) + lbs;


    const result = (703 * (weight / ((height) ** 2))).toFixed(1)

    return parseFloat(result);
  }

  const calculateResults = (userInputs) => {
    if (userInputs['height'] !== undefined && userInputs['weight'] !== undefined) {

      setResult(bmiCalculatorMetric(userInputs.weight, userInputs.height))

    } else if (userInputs['feet'] && userInputs['inch'] && userInputs['stone'] && userInputs['lbs']) {

      // console.log(bmiCalculatorImperial(userInputs.feet, userInputs.inch, userInputs.stone, userInputs.lbs))
      setResult(bmiCalculatorImperial(userInputs.feet, userInputs.inch, userInputs.stone, userInputs.lbs))

    }

  }

  const [range, setRange] = useState("")

  const bmiRange = (result) => {

    if (result < 18.5) {
      setRange("Underweight")
    } else if (result >= 18.5 && result < 24.9) {
      setRange("Healthy Weight")
    } else if (result >= 25 && result < 29.9) {
      setRange("Overweight")
    } else if (result >= 30) {
      setRange("Obese")
    }
  }

  const [weightRange, setWeightRange] = useState("")
  const calculateWeightRange = (height) => {
    
    let lowerLimit = 0;
    let upperLimit = 0;

    if (userInputs['height'] !== undefined && userInputs['weight'] !== undefined) {

      lowerLimit = 18.5 * (height**2);
      upperLimit = 24.8 * (height**2);
      setWeightRange(`${lowerLimit.toFixed(1)}kg - ${upperLimit.toFixed(1)}kg`)

    } else if (userInputs['feet'] && userInputs['inch'] && userInputs['stone'] && userInputs['lbs']) {


      lowerLimit = 18.5/703 * (height**2);
      upperLimit = 24.8/703 * (height**2);
      setWeightRange(`${lowerLimit.toFixed(1)}lbs - ${upperLimit.toFixed(1)}lbs`)

    }
    

    
  }

  useEffect(() => {
    calculateResults(userInputs)
    bmiRange(result);
    if (userInputs['height'] !== undefined && userInputs['weight'] !== undefined) {

      calculateWeightRange(userInputs.height, range);

    } else if (userInputs['feet'] && userInputs['inch'] && userInputs['stone'] && userInputs['lbs']) {
      let height = userInputs.feet * 12 + userInputs.inch;
      
      calculateWeightRange(height, range);

    }
    
  }, [range, result, userInputs])

  if (isInputEmpty) {
    return (
      <section className='results results--empty'>

        <h1 className="results__welcome">Welcome!</h1>
        <p className='results__instructions'>Enter your height and weight and you'll see your bmi result here</p>
      </section>
    )
  } else {
    return (
      <section className='results'>
        <section className="results__left-section">
          <h3 className="results__intro">Your BMI is...</h3>
          <h1 className="results__bmi">{result}</h1>
        </section>
        <section className="results__right-section">
          <p className='results__explanation'>Your BMI suggests that you're {range}. Your ideal weight is between <span className="results__ideal-weight">{weightRange}</span>.</p>
        </section>
      </section>
    )
  }


}

export default Results