import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  TRequest,
  TAddRequestPayload,
  TEditRequestPayload,
  TRemoveRequestPayload,
} from "./types";

export type TRequestReducerState = {
  requests: TRequest[];
};

const initialState: TRequestReducerState = {
  requests: localStorage.getItem("request_list")
    ? (JSON.parse(localStorage.getItem("request_list")!) as TRequest[])
    : [],
};

const requestSlice = createSlice({
  name: "requestSlice",
  initialState,
  reducers: {
    // setRequests(state, action: PayloadAction<TSetRequestsPayload>) {
    //   state.requests = action.payload;
    //   localStorage.setItem("request_list", JSON.stringify(state.requests));
    // },
    addRequest(
      state: TRequestReducerState,
      action: PayloadAction<TAddRequestPayload>
    ) {
      state.requests = [...state.requests, action.payload];
      localStorage.setItem("request_list", JSON.stringify(state.requests));
    },
    editRequest(
      state: TRequestReducerState,
      action: PayloadAction<TEditRequestPayload>
    ) {
      state.requests = state.requests.map((r) =>
        r.id === action.payload.id ? { ...r, ...action.payload.data } : r
      );
      localStorage.setItem("request_list", JSON.stringify(state.requests));
    },
    // filterRequests(state, action: PayloadAction<TFilterRequestsPayload>) {
    //   state.requests = state.requests.filter((r) => r.id !== action.payload.id);
    //   localStorage.setItem("request_list", JSON.stringify(state.requests));
    // },
    removeRequest(
      state: TRequestReducerState,
      action: PayloadAction<TRemoveRequestPayload>
    ) {
      state.requests = state.requests.filter((r) => r.id !== action.payload.id);
    },
  },
});

export const { addRequest, editRequest, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;
