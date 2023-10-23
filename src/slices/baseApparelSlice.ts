import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { BaseApparelState } from "@src/types/BaseApparel";
import { validateEmail } from "@src/utilities/validateEmail";

const initialState: BaseApparelState = {
  email: "",
  error: false,
};

export const BASE_APPAREL_SLICE = "base_apparel_slice";
export const baseApparelSlice = createSlice({
  initialState,
  name: BASE_APPAREL_SLICE,
  reducers: {
    setEmailAddress: (state, action: PayloadAction<string>) => {
      const email = action.payload;
      if (validateEmail(email)) {
        state.email = email;
        state.error = false;
      } else {
        state.error = true;
      }
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
});
export const baseApparelActions = baseApparelSlice.actions;
export const baseApparelReducer = baseApparelSlice.reducer;
