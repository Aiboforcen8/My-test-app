import { GET_USER, GET_ALL_USERS } from "../actionTypes/usersAT";

export const getUserAc = (payload) => {
  return {
    type: GET_USER,
    payload,
  };
};

export const getAllUsersAc = (payload) => {
  return {
    type: GET_ALL_USERS,
    payload,
  };
};
