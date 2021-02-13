import { useSelector } from "react-redux";
import { RootState } from "../services/stores";

export default function GetUserName(): string {

  const userData = useSelector((reduxStore: RootState) => reduxStore.user);

  return userData.payload.username;
}
