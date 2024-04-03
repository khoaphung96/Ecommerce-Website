import { createSlice } from "@reduxjs/toolkit";

let cart = JSON.parse(localStorage.getItem("cart"));

if (cart === null) {
  cart = [];
}

const initialCartState = { cart: cart };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addCart(state, actions) {
      if (state.cart.length === 0) {
        state.cart.push(actions.payload);
        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        let checkProductIsDifferent = true;

        for (let i = 0; i < state.cart.length; i++) {
          if (state.cart[i].id === actions.payload.id) {
            checkProductIsDifferent = false;
            state.cart[i].quantity = String(
              Number(state.cart[i].quantity) + Number(actions.payload.quantity)
            );
            state.cart[i].total = String(
              Number(state.cart[i].quantity) * Number(state.cart[i].price)
            );
            localStorage.removeItem("cart");
            localStorage.setItem("cart", JSON.stringify(state.cart));
          }
        }

        if (checkProductIsDifferent) {
          state.cart.push(actions.payload);
          localStorage.removeItem("cart");
          localStorage.setItem("cart", JSON.stringify(state.cart));
        }
      }
    },

    updateCart(state, actions) {
      if (actions.payload.type === "decrease") {
        for (let i = 0; i < state.cart.length; i++) {
          if (state.cart[i].id === actions.payload.id) {
            state.cart[i].quantity = String(Number(state.cart[i].quantity) - 1);
            state.cart[i].total = String(
              Number(state.cart[i].quantity) * Number(state.cart[i].price)
            );

            localStorage.removeItem("cart");
            localStorage.setItem("cart", JSON.stringify(state.cart));
          }
        }
      }

      if (actions.payload.type === "increase") {
        for (let i = 0; i < state.cart.length; i++) {
          if (state.cart[i].id === actions.payload.id) {
            state.cart[i].quantity = String(Number(state.cart[i].quantity) + 1);
            state.cart[i].total = String(
              Number(state.cart[i].quantity) * Number(state.cart[i].price)
            );
            localStorage.removeItem("cart");
            localStorage.setItem("cart", JSON.stringify(state.cart));
          }
        }
      }
    },

    deleteProductOnCart(state, actions) {
      state.cart = state.cart.filter((prod) => prod.id !== actions.payload);
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    deleteCart(state) {
      state.cart = [];
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
