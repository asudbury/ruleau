import { createSlice } from "@reduxjs/toolkit";
import { fetchCaseOverrides, caseOverridesThunks } from "./CaseOverridesThunks";
import { TestCaseRuleOverridesMultiple } from "../../testData/TestCaseRuleOverridesMultiple";

export const caseOverridesSlice = createSlice({
  name: "caseOverrides",
  initialState: {
    meta: { pending: false },
    payload: TestCaseRuleOverridesMultiple,
    error: false,
  } as any,
  reducers: {},
  extraReducers: caseOverridesThunks,
});

export { fetchCaseOverrides };
export default caseOverridesSlice.reducer;
