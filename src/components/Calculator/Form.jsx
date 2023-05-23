import React from 'react'

function Form() {
  return (
    <form className='user-form' action="submit">
        <input className="user-form__metric-radio" name="metric" type="radio" />
        <label className="user-form__metric-label" for="metric">Metric</label>
        <input className="user-form__imperial-radio" name="imperial" type="radio" />
        <label className="user-form__imperial-label" for="imperial">Imperial</label>
        <div className="user-form__user-inputs">
            <label className="user-form__height-label" for="height">Height</label>
            <div className="user-form__input-area">
                <input className="user-form__height-input" name="height" type="text" />
                <span className="user-form__height-unit">cm</span>
            </div>
        </div>
        <div className="user-form__user-inputs">
            <label className="user-form__height-label" for="weight">Weight</label>
            <div className="user-form__input-area">
                <input className="user-form__weight-input" name="weight" type="text" />
                <span className="user-form__weight-unit">kg</span>
            </div>
        </div>
    </form>
  )
}

export default Form