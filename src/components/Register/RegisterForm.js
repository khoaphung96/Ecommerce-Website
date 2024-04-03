import { Link, useNavigate } from "react-router-dom";
import classes from "./RegisterForm.module.css";
import useInput from "../../hooks/use-input";

const RegisterForm = () => {
  const navigate = useNavigate();
  let formIsValid = false;

  const {
    enteredValue: enteredName,
    valueIsValid: enteredNameIsValid,
    valueIsInvalid: enteredNameIsInvalid,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    valueIsInvalid: enteredEmailIsInvalid,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
  } = useInput((value) => value.includes("@"));

  const {
    enteredValue: enteredPassord,
    valueIsValid: enteredPasswordIsValid,
    valueIsInvalid: enteredPasswordIsInvalid,
    inputChangeHandler: passwordInputChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
  } = useInput((value) => value.trim().length > 8);

  const {
    enteredValue: enteredPhone,
    valueIsValid: enteredPhoneIsValid,
    valueIsInvalid: enteredPhoneIsInvalid,
    inputChangeHandler: phoneInputChangeHandler,
    inputBlurHandler: phoneInputBlurHandler,
  } = useInput((value) => value);

  let userArr = [];

  if (localStorage.getItem("users")) {
    userArr = JSON.parse(localStorage.getItem("users"));
  }

  if (enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    if (formIsValid) {
      const userInput = [
        {
          name: enteredName,
          email: enteredEmail,
          password: enteredPassord,
          phone: enteredPhone,
        },
      ];

      if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify(userInput));
      } else {
        let checkEmmailIsDifferent = true;

        for (let i = 0; i < userArr.length; i++) {
          if (userArr[i].email === userInput[0].email) {
            checkEmmailIsDifferent = false;
            return window.alert("Email exist. Please input a diffirent email");
          }
        }

        if (checkEmmailIsDifferent) {
          localStorage.removeItem("users");
          const userArrNew = userArr.concat(userInput);
          localStorage.setItem("users", JSON.stringify(userArrNew));
        }
      }

      navigate("/login");
    }
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <h1>Sign Up</h1>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        onChange={nameInputChangeHandler}
        onBlur={nameInputBlurHandler}
      ></input>
      {enteredNameIsInvalid && (
        <p style={{ color: "red" }}>Please input your name!</p>
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlurHandler}
      ></input>
      {enteredEmailIsInvalid && (
        <p style={{ color: "red" }}>Please input your email (includes "@")!</p>
      )}
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={passwordInputChangeHandler}
        onBlur={passwordInputBlurHandler}
      ></input>
      {enteredPasswordIsInvalid && (
        <p style={{ color: "red" }}>
          Please input your password <br></br>(must be greaten than 8)
        </p>
      )}
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone"
        onChange={phoneInputChangeHandler}
        onBlur={phoneInputBlurHandler}
      ></input>
      <button
        type="submit"
        className={classes.action}
        disabled={!formIsValid}
        // onClick={submitHandler}
      >
        SIGN UP
      </button>
      <p>
        Login? <Link to="/login">Click</Link>
      </p>
    </form>
  );
};

export default RegisterForm;
