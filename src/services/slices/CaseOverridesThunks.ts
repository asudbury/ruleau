/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Endpoints from "../constants/Endpoints";
import API from "../api";
import { fsaFulfilled, fsaPending, fsaRejected } from "../core/FsaActions";
import { FSA } from "../models/FluxStandardActions";

export const fetchCaseOverrides = createAsyncThunk(
  "case/overrides",
  async ({ caseId }: { caseId: string }) => {
    const result = await new API(Endpoints.CASE_OVERRIDES)
      .tokenise(caseId)
      .fetch();
    return result.data;
  }
);

export const caseOverridesThunks = {
  [fetchCaseOverrides.pending.toString()]: (state: FSA<any>) => fsaPending(state),
  [fetchCaseOverrides.fulfilled.toString()]: (state: FSA<any>, action: { payload: any; type: string; }) =>
    fsaFulfilled(state, action),
  [fetchCaseOverrides.rejected.toString()]: (state: FSA<any>, action: { payload: any; type: string; }) =>
    fsaRejected(state, action),
};
