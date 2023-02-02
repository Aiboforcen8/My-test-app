import { GET_ALL_USERS, GET_USER } from "../actionTypes/usersAT";

const initialState = { users: [] };

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {};

    case GET_ALL_USERS:
      return { ...state, users: [...state.users, ...action.payload] };

    default:
      return state;
  }
};
