import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { requestReducer } from "@/entities/request";

const mainReducer = combineReducers({
  requestReducer: requestReducer,
});

export const mainStore = configureStore({
  reducer: mainReducer,
});

export type MainStoreState = ReturnType<typeof mainStore.getState>;
