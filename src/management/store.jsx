import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "../management/slice/cartSlice";
import orderSlice from "./slice/orderSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    order: orderSlice
  }
})