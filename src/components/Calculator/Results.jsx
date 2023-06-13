import React from 'react'

function Results() {
  return (
    <section className='results'>
        <section className="results__left-section">
            <h3 className="results__intro">Your BMI is...</h3>
            <h1 className="results__bmi">23.4</h1>
        </section>
        <section className="results__right-section">  
        <p className='results__explanation'>Your BMI suggests that you're healthy weight. Your ideal weight is between <span className="results_ideal-weight">63.3kgs - 85.2kgs</span>.</p>
        </section>
    </section>
  )
}

export default Results