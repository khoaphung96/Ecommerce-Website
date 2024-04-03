import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import DetailPage from "./pages/Detail";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/Checkout";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import RootLayout from "./pages/RootLayout";
import { loader as productLoader } from "./components/Home/Products";
import { loaderToken } from "./components/Utility/auth";
import { logoutAction } from "./pages/Logout";
import ErrorPage from "./pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      id: "root",
      loader: loaderToken,
      children: [
        { path: "/", element: <HomePage></HomePage>, loader: productLoader },
        {
          path: "/shop",
          element: <ShopPage></ShopPage>,
          loader: productLoader,
        },
        {
          path: "/detail/:productId",
          element: <DetailPage></DetailPage>,
          loader: productLoader,
        },
        { path: "/cart", element: <CartPage></CartPage> },
        { path: "/checkout", element: <CheckoutPage></CheckoutPage> },
        { path: "/login", element: <LoginPage></LoginPage> },
        { path: "/register", element: <RegisterPage></RegisterPage> },
        { path: "/logout", action: logoutAction },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
