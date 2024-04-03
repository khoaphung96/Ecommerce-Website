import classes from "./Login.module.css";
import LoginForm from "./LoginForm";

const Login = (props) => {
  return (
    <div className={classes.login}>
      <img src={props.banner} alt="Logo"></img>
      <LoginForm></LoginForm>
    </div>
  );
};

export default Login;
