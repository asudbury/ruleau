import { createSlice } from "@reduxjs/toolkit";
import { FSA } from "../models/FluxStandardActions";
import { TestProcesses } from "../../testData/TestProcesses";
import { Process } from "../models/Process";

export const processesSlice = createSlice({
  name: "processes",
  initialState: {
    meta: { pending: false },
    payload: TestProcesses,
    error: false,
  } as FSA<Process>,
  reducers: {},
});

export default processesSlice.reducer;
