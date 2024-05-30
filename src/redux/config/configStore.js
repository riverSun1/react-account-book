import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // 기본적으로 로컬 스토리지를 사용합니다.
import accountReducer from "../slices/accountSlice";

// persist 설정을 정의합니다.
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, accountReducer);

// configureStore를 사용하여 스토어를 생성합니다.
const store = configureStore({
  reducer: {
    account: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

// persistor를 생성합니다.
const persistor = persistStore(store);

export { persistor, store };

// import { configureStore } from "@reduxjs/toolkit";
// import accountSlice from "../slices/accountSlice";

// const store = configureStore({
//   reducer: {
//     account: accountSlice,
//   },
// });

// export default store;
