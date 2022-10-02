import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/authSlice";
import productReducer from "./slices/products/productSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
