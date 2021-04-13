import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import rootReducer from "../reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({ serializableCheck: false }).concat(logger),
  devTools: true, // process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// Cypress Testing (exposes Redux whilst running tests)
// if ((window as any).Cypress) {
//  (window as any).store = store;
//}
