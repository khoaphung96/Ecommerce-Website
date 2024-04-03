import classes from "./Register.module.css";
import RegisterForm from "./RegisterForm";

const Register = (props) => {
  return (
    <div className={classes.register}>
      <img src={props.banner} alt="Logo"></img>
      <RegisterForm></RegisterForm>
    </div>
  );
};

export default Register;
