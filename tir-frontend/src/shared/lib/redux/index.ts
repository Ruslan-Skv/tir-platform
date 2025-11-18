import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/features/cart/model/cartSlice';
import themeReducer from '@/features/theme/model/themeSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
