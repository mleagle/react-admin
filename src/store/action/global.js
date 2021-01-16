import { setTokenKey } from "../Type";
import { setToken } from "@/utils/session";

export function setTokenAction(token) {
  setToken(token);
  return {
    type: setTokenKey,
    payload: token,
  };
}
