import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartItems: [],
};

const cartSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {

    // ------------------ PRODUCT CRUD ------------------

    addProduct: (state, action) => {
      state.products.push(action.payload);
    },

    updateProduct: (state, action) => {
      const updatedProduct = action.payload;

      state.products = state.products.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      );
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },

    // ------------------ CART ------------------

    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.cartItems.find(
        (product) => product.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...item,
          quantity: 1,
        });
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addProduct,
  updateProduct,
  deleteProduct,
  addToCart,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;