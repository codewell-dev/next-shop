import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../interfaces";
import { LocalStorageSet } from "../utils";

const cartSlice = createSlice({
  name: "carts",
  initialState: [] as Product[],
  reducers: {
    addProduct: (state: Product[], action: PayloadAction<Product>) => {
      const product: any = state.find(
        (i: Product) => i.id === action.payload.id
      );
      if (product) {
        product.quantity += 1;
      } else {
        const product = {
          ...action.payload,
          quantity: 1,
        };
        state.push(product);
        LocalStorageSet(current(state));
      }
    },
    deleteProduct: (state: Product[], action: PayloadAction<number>) => {
      const newState: Product[] = state.filter((i) => i.id !== action.payload);
      LocalStorageSet(newState);
      return newState;
    },
    addQuantity: (state: Product[], action: PayloadAction<number>) => {
      const newState: any = state.find((i: Product) => i.id === action.payload);
      if (newState) {
        newState.quantity += 1;
      }
      LocalStorageSet(current(state));
    },
    deleteQuantity: (state: Product[], action: PayloadAction<number>) => {
      const item: any = state.find((i: Product) => i.id === action.payload);
      if (item.quantity == 1) {
        const newState = state.filter((i: Product) => i.id !== item.id);
        LocalStorageSet(newState);
        return newState
      } else {
        item.quantity -= 1;
        LocalStorageSet(current(state));
      }
    },
    getAllData: (state: Product[]) => {
      const from_localStorage = window.localStorage.getItem("cart");
      if (from_localStorage) {
        const from_localStorageParse: any = JSON.parse(from_localStorage);
        state = from_localStorageParse;
        return state
      } else if (
        from_localStorage === null ||
        from_localStorage === undefined
      ) {
        LocalStorageSet([].toString());
      }
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  addQuantity,
  deleteQuantity,
  getAllData,
} = cartSlice.actions;
export default cartSlice.reducer;
