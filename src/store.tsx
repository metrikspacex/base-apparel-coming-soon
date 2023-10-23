import { configureStore } from "@reduxjs/toolkit";

import {
  BASE_APPAREL_SLICE,
  baseApparelReducer,
} from "./slices/baseApparelSlice";

export const storeClient = configureStore({
  reducer: {
    [BASE_APPAREL_SLICE]: baseApparelReducer,
  },
});
export type RootState = ReturnType<typeof storeClient.getState>;
export type AppDispatch = typeof storeClient.dispatch;
