import studentInfoReducer from "../slices/studentInfoSlice";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // ✅ Uses localStorage
import { persistReducer, persistStore } from "redux-persist";

// ✅ Persist Config: Store both "user" and "graph"
const persistConfig = {
  key: "root", // ✅ Keep as "root" since we have multiple slices
  storage,
  whitelist: ["user"], // ✅ Persist both user & graph slices
};

// ✅ Combine Reducers
const rootReducer = combineReducers({
  user: studentInfoReducer,
});

// ✅ Apply persistReducer to combined reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// ✅ Configure Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ✅ Fix for non-serializable values
    }),
});

// ✅ Persistor for Redux Persist
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
