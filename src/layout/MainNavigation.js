import { NavLink, useRouteLoaderData, Form } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const token = useRouteLoaderData("root");
  let userArr = [];

  if (localStorage.getItem("users")) {
    userArr = JSON.parse(localStorage.getItem("users"));
  }
  let name = "";
  if (token) {
    const userCurrent = userArr.filter((user) => user.email === token);
    name = userCurrent[0].name;
  }

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Shop
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1>BOUTIQUE</h1>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Cart
            </NavLink>
          </li>
          {token && (
            <li>
              <NavLink to="#">{name}</NavLink>
            </li>
          )}
          {!token && (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Login
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <Form action="/logout" method="post">
                <button>
                  <h4>Logout</h4>
                </button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
