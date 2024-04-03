import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";
import classes from "./LoginForm.module.css";
import useInput from "../../hooks/use-input";

const LoginForm = () => {
  const navigate = useNavigate();
  const token = useRouteLoaderData("root");
  let formIsValid = false;

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
  } = useInput((value) => value.trim() !== "");

  let userArr = [];

  if (localStorage.getItem("users")) {
    userArr = JSON.parse(localStorage.getItem("users"));
  }

  if (enteredEmailIsValid && enteredPasswordIsValid) {
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
          email: enteredEmail,
          password: enteredPassord,
        },
      ];

      let hasEmail = false;

      for (let i = 0; i < userArr.length; i++) {
        if (userArr[i].email === userInput[0].email) {
          if (userArr[i].password === userInput[0].password) {
            localStorage.setItem("token", userInput[0].email);
            localStorage.setItem("cart", JSON.stringify([]));
            navigate("/login");
          } else {
            window.alert("Password is wrong!");
          }
          hasEmail = true;
        }
      }

      if (!hasEmail) {
        window.alert("Email does't exist. Please input a diffirent email");
      }
    }
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      {token && <h1>Welcome Back!</h1>}
      {!token && (
        <div>
          <h1>Sign In</h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
          ></input>
          {enteredEmailIsInvalid && (
            <p style={{ color: "red" }}>
              Please input your email (includes "@")!
            </p>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={passwordInputChangeHandler}
            onBlur={passwordInputBlurHandler}
          ></input>
          {enteredPasswordIsInvalid && (
            <p style={{ color: "red" }}>Please input your password</p>
          )}
          <button
            type="submit"
            className={classes.action}
            disabled={!formIsValid}
            // onClick={submitHandler}
          >
            SIGN IN
          </button>
          <p>
            Create an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      )}
    </form>
  );
};

export default LoginForm;
