import React, { useState, useEffect } from "react";

function Form({ userInputs, setUserInputs, isInputEmpty, setIsInputEmpty }) {

  //   const [radioClass, setRadioClass] = useState("radio__button")

  //     const [radioInside, setRadioInside] = useState("radio__button-inside--inactive") 
  const [isMetricClicked, setIsMetricClicked] = useState(true);
  const [isImperialClicked, setIsImperialClicked] = useState(false);


  const [userHeightError, setUserHeightError] = useState(false);

  //   const handleRadioClick = () => {
  //     if (radioClass === "radio__button") {
  //         setRadioClass("radio__button radio__button--selected");
  //         setRadioInside("radio__button-inside--active");
  //     } else {
  //         setRadioClass("radio__button");
  //         setRadioInside("radio__button-inside--inactive")
  //     }
  //   }


  const [userHeight, setUserHeight] = useState("")
  const [userWeight, setUserWeight] = useState("")
  const [userFeet, setUserFeet] = useState("")
  const [userInch, setUserInch] = useState("")
  const [userStone, setUserStone] = useState("")
  const [userLbs, setUserLbs] = useState("")


  useEffect(() => {
    if (userHeightError) {
      setIsInputEmpty(true)
    }
    if (userHeight && userWeight) {
      setIsInputEmpty(false);
      
      
      
    }

    if (userFeet  && userInch  && userStone  && userLbs ) {
      setIsInputEmpty(false)
      
    }

    

  }, [userHeight, userWeight, userFeet, userInch, userStone, userLbs, setUserInputs, setUserHeight, setUserWeight, setUserFeet, setUserInch, setUserStone, setUserLbs])

  const handleHeightChange = (e) => {

    let heightValue = e.target.value;
    if (isNaN(Number(heightValue))) {
      setUserHeight(0)
      setUserHeightError(true)
    } else {
      setUserHeightError(false)
      heightValue = Number(heightValue);
      setUserHeight(heightValue);
      setUserInputs({
        ...userInputs,
        height: heightValue/100
      })
      

      if (heightValue < 0 | heightValue > 300 | heightValue === undefined) {
        setUserHeight(0);
        setUserHeightError(true)
      }
    }
  }

  const handleWeightChange = (e) => {
    let weightValue = e.target.value;
    if (isNaN(Number(weightValue))) {
      setUserWeight(0)
      setUserHeightError(true)
    } else {
      setUserHeightError(false)
      weightValue = Number(weightValue);
      setUserWeight(weightValue);
      setUserInputs({...userInputs, weight: weightValue})
      

      if (weightValue < 0 | weightValue > 300 | weightValue === undefined) {
        setUserWeight(0);
        setUserHeightError(true)
      }
    }
  }

  //write function for ft change
  const handleFeetChange = (e) => {

    let feetValue = e.target.value;
    if (isNaN(Number(feetValue))) {
      setUserFeet(0)
      setUserHeightError(true)
    } else {
      setUserHeightError(false)
      feetValue = Number(feetValue);
      setUserFeet(feetValue);
      setUserInputs({
        ...userInputs,
        feet: feetValue
      })
      

      if (feetValue < 0 | feetValue > 9 | feetValue === undefined) {
        setUserFeet(0);
        setUserHeightError(true)
      }
    }
  }

  //write function for inch change
  const handleInchChange = (e) => {

    let inchValue = e.target.value;
    if (isNaN(Number(inchValue))) {
      setUserInch(0)
      setUserHeightError(true)
    } else {
      setUserHeightError(false)
      inchValue = Number(inchValue);
      setUserInch(inchValue);
      setUserInputs({
        ...userInputs,
        inch: inchValue
      })
      

      if (inchValue < 0 | inchValue > 11 | inchValue === undefined) {
        setUserInch(0);
        setUserHeightError(true)
      }
    }
  }

  //write function for stone change
  const handleStoneChange = (e) => {

    let stoneValue = e.target.value;
    if (isNaN(Number(stoneValue))) {
      setUserStone(0)
      setUserHeightError(true)
    } else {
      setUserHeightError(false)
      stoneValue = Number(stoneValue);
      setUserStone(stoneValue);
      setUserInputs({
        ...userInputs,
        stone: stoneValue
      })
      

      if (stoneValue < 0 | stoneValue > 25 | stoneValue === undefined) {
        setUserStone(0);
        setUserHeightError(true)
      }
    }
  }


  //write function for lbs change
  const handleLbsChange = (e) => {

    let lbsValue = e.target.value;
    if (isNaN(Number(lbsValue))) {
      setUserLbs(0)
      setUserHeightError(true)
    } else {
      setUserHeightError(false)
      lbsValue = Number(lbsValue);
      setUserLbs(lbsValue);
      setUserInputs({
        ...userInputs,
        lbs: lbsValue
      })
      

      if (lbsValue < 0 | lbsValue === undefined) {
        setUserLbs(0);
        setUserHeightError(true)
      }
    }
  }

  

  const handleMetricRadio = () => {
    setIsMetricClicked(true);
    setIsImperialClicked(false);
    setUserHeight(0)
    setUserWeight(0)
    setUserFeet(0)
    setUserInputs({})
    setUserInch(0)
    setUserStone(0)
    setUserLbs(0)
  }

  const handleImperialRadio = () => {
    setIsImperialClicked(true);
    setIsMetricClicked(false);
    setUserHeight(0)
    setUserWeight(0)
    setUserInputs({})
  }

  const [isHeightInputSelected, setIsHeightInputSelected] = useState(false);
  const [isWeightInputSelected, setIsWeightInputSelected] = useState(false);

  const handleHeightInputFocus = () => {
    setIsHeightInputSelected(true);
  }

  const handleHeightInputBlur = () => {
    setIsHeightInputSelected(false)
  }
  const handleWeightInputFocus = () => {
    setIsWeightInputSelected(true);
  }

  const handleWeightInputBlur = () => {
    setIsWeightInputSelected(false)
  }

  return (
    <form className="user-form" action="submit">
      <div className="user-form__radio-section">

        <div onClick={handleMetricRadio} className="radio">
          <div className={`radio__button ${isMetricClicked ? "radio__button--selected" : ""}`}>
            <div className={isMetricClicked ? "radio__button-inside--active" : "radio__button-inside--inactive"}>
            </div>
          </div>
          <p className="radio__label">Metric</p>
        </div>
        <div onClick={handleImperialRadio} className="radio">
          <div className={`radio__button ${isImperialClicked ? "radio__button--selected" : ""}`}>
            <div className={isImperialClicked ? "radio__button-inside--active" : "radio__button-inside--inactive"}>
            </div>
          </div>
          <p className="radio__label">Imperial</p>
        </div>
      </div>
      {isImperialClicked ?
        <div>
          <div className="user-form__input-section">
            <div className="user-form__user-inputs">
              <label className="user-form__label" htmlFor="height">
                Height
              </label>
              <div className={isHeightInputSelected ? `user-form__input-area user-form__input-area--selected` : `user-form__input-area`}>
                <input
                  className="user-form__input"
                  name="height"
                  type="text"
                  placeholder="0"
                  onChange={handleFeetChange}
                  onFocus={handleHeightInputFocus}
                  onBlur={handleHeightInputBlur}
                  value={userFeet}
                />
                <span className="user-form__unit">ft</span>
              </div>
            </div>
            <div className="user-form__user-inputs">
              
              <div className={isWeightInputSelected ? `user-form__input-area user-form__input-area--selected` : `user-form__input-area`}>
                <input
                  className="user-form__input"
                  name="weight"
                  type="text"
                  placeholder="0"
                  onChange={handleInchChange}
                  onFocus={handleWeightInputFocus}
                  onBlur={handleWeightInputBlur}
                  value={userInch}
                />
                <span className="user-form__unit">in</span>
              </div>
            </div>


          </div>
          <div className="user-form__input-section">
            <div className="user-form__user-inputs">
              <label className="user-form__label" htmlFor="height">
                Weight
              </label>
              <div className={isHeightInputSelected ? `user-form__input-area user-form__input-area--selected` : `user-form__input-area`}>
                <input
                  className="user-form__input"
                  name="height"
                  type="text"
                  placeholder="0"
                  onChange={handleStoneChange}
                  onFocus={handleHeightInputFocus}
                  onBlur={handleHeightInputBlur}
                  value={userStone}
                />
                <span className="user-form__unit">st</span>
              </div>
            </div>
            <div className="user-form__user-inputs">
              <label className="user-form__label" htmlFor="weight">
                
              </label>
              <div className={isWeightInputSelected ? `user-form__input-area user-form__input-area--selected` : `user-form__input-area`}>
                <input
                  className="user-form__input"
                  name="weight"
                  type="text"
                  placeholder="0"
                  onChange={handleLbsChange}
                  onFocus={handleWeightInputFocus}
                  onBlur={handleWeightInputBlur}
                  value={userLbs}
                />
                <span className="user-form__unit">lbs</span>
              </div>
            </div>


          </div>
        </div>
        : null
      }
      {isMetricClicked ?
        <div className="user-form__input-section">
          <div className="user-form__user-inputs">
            <label className="user-form__label" htmlFor="height">
              Height
            </label>
            <div className={isHeightInputSelected ? `user-form__input-area user-form__input-area--selected` : `user-form__input-area`}>
              <input
                className="user-form__input"
                name="height"
                type="text"
                placeholder="0"
                onChange={handleHeightChange}
                onFocus={handleHeightInputFocus}
                onBlur={handleHeightInputBlur}
                value={userHeight}
              />
              <span className="user-form__unit">cm</span>
            </div>
          </div>
          <div className="user-form__user-inputs">
            <label className="user-form__label" htmlFor="weight">
              Weight
            </label>
            <div className={isWeightInputSelected ? `user-form__input-area user-form__input-area--selected` : `user-form__input-area`}>
              <input
                className="user-form__input"
                name="weight"
                type="text"
                placeholder="0"
                onChange={handleWeightChange}
                onFocus={handleWeightInputFocus}
                onBlur={handleWeightInputBlur}
                value={userWeight}
              />
              <span className="user-form__unit">kg</span>
            </div>
          </div>

        </div>
        : null}

      {userHeightError ?
        <p className="user-form__error">Please enter a valid number</p> : null
      }
    </form>
  );
}

export default Form;
