import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { productsApi } from './src/lib/products'
import cartSlice from './src/lib/slices/cartSlice'

export const makeStore = () => {
    return configureStore({
      reducer: {
        cart: cartSlice,
        [productsApi.reducerPath]: productsApi.reducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware, logger),
    })
  }
  

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']