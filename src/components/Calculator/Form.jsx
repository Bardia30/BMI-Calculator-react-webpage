import React, { useState } from "react";

function Form() {
  
//   const [radioClass, setRadioClass] = useState("radio__button")

//     const [radioInside, setRadioInside] = useState("radio__button-inside--inactive") 
    const [isMetricClicked, setIsMetricClicked] =  useState(false);
    const [isImperialClicked, setIsImperialClicked] =  useState(false);

//   const handleRadioClick = () => {
//     if (radioClass === "radio__button") {
//         setRadioClass("radio__button radio__button--selected");
//         setRadioInside("radio__button-inside--active");
//     } else {
//         setRadioClass("radio__button");
//         setRadioInside("radio__button-inside--inactive")
//     }
//   }

    const handleMetricRadio = () => {
        setIsMetricClicked(true);
        setIsImperialClicked(false);
    }

    const handleImperialRadio = () => {
        setIsImperialClicked(true);
        setIsMetricClicked(false);
    }

    return (
    <form className="user-form" action="submit">
      <div className="user-form__radio-section">
        
        <div onClick={handleMetricRadio} className="radio">
            <div className={`radio__button ${isMetricClicked ? "radio__button--selected": ""}`}><div className={isMetricClicked ? "radio__button-inside--active" : "radio__button-inside--inactive" }></div></div>
            <p className="radio__label">Metric</p>
        </div>
        <div onClick={handleImperialRadio} className="radio">
            <div className={`radio__button ${isImperialClicked ? "radio__button--selected": ""}`}><div className={isImperialClicked ? "radio__button-inside--active" : "radio__button-inside--inactive" }></div></div>
            <p className="radio__label">Imperial</p>
        </div>
      </div>
      <div className="user-form__input-section">
        <div className="user-form__user-inputs">
          <label className="user-form__label"  htmlFor="height">
            Height
          </label>
          <div className="user-form__input-area">
            <input
              className="user-form__input"
              name="height"
              type="text"
              
            />
            <span className="user-form__unit">cm</span>
          </div>
        </div>
        <div className="user-form__user-inputs">
          <label className="user-form__label" htmlFor="weight">
            Weight
          </label>
          <div className="user-form__input-area">
            <input
              className="user-form__input"
              name="weight"
              type="text"
            />
            <span className="user-form__unit">kg</span>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
