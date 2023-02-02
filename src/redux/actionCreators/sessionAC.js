import { CHECK_SESSION } from "../actionTypes/sessionAT";

export const checkSessionAC = (payload) => {
  return {
    type: CHECK_SESSION,
    payload,
  };
};
