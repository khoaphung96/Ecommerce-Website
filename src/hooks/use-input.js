import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnterdValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const valueIsInvalid = !valueIsValid && enteredValueTouched;

  const inputChangeHandler = (event) => {
    setEnterdValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setEnteredValueTouched(true);
  };

  // const resetValueHandler = () => {
  //   setEnterdValue("");
  //   setEnteredValueTouched(false);
  // };

  return {
    enteredValue,
    valueIsValid,
    valueIsInvalid,
    inputChangeHandler,
    inputBlurHandler,
    // resetValueHandler,
  };
};
export default useInput;
