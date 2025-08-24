import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
// import productReducer from './productslice'; // Only if you're using it

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // products: productReducer, // Optional
  },
});

export default store;
