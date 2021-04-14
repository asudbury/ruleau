import { useSelector } from "react-redux";
import { RootState } from "../stores";

export default function GetProcessesSelector(): any {
  return useSelector((reduxStore: RootState) => reduxStore.processes);
}
