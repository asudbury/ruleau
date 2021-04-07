import { combineReducers } from "redux";
import {
  userReducer,
  casesReducer,
  caseOverridesReducer,
  caseOverrideUpdateReducer,
} from "../slices";

export default combineReducers({
  user: userReducer,
  cases: casesReducer,
  caseOverrides: caseOverridesReducer, 
  caseOverrideUpdate: caseOverrideUpdateReducer,
});

