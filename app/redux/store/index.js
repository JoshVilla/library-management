import { configureStore } from "@reduxjs/toolkit";
import studentInfoReducer from "../slices/studentInfoSlice";
import storage from "redux-persist/lib/storage"; // ✅ Uses localStorage
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "user", // ✅ Change from "root" to "user" to match the slice name
  storage,
};

const persistedReducer = persistReducer(persistConfig, studentInfoReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer, // ✅ Ensure this matches the slice name
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ✅ Fix for non-serializable values
    }),
});

export const persistor = persistStore(store);
