import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../interfaces";

const cartSlice = createSlice({
  name: "carts",
  initialState: [] as Product[],
  reducers: {
    addProduct: (state, action: PayloadAction<any>) => {
      const product: any = state.find((i: any) => i.id === action.payload.id)
      if (product) {
        product.quantity += 1
      } else {
        const product = {
          ...action.payload, quantity: 1
        }
        state.push(product);
      }
    },
    deleteProduct: (state, action: PayloadAction<any>) => {
      return state.filter(i => i.id !== action.payload)
    },
    addQuantity: (state: any, action) => {
      const item = state.find((i: any) => i.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },
    deleteQuantity: (state: any, action) => {
      const item = state.find((i: any) => i.id === action.payload)
      if (item.quantity == 1) {
        return state.filter((i: any) => i.id !== item.id)
      } else {
        item.quantity -= 1
      }
    },
  },
});

export const { addProduct, deleteProduct, addQuantity, deleteQuantity } = cartSlice.actions;
export default cartSlice.reducer;


