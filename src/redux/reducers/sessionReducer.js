import { CHECK_SESSION } from "../actionTypes/sessionAT";

const initialState = { session: {} };

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_SESSION:

      return {...state, session: {login: action.payload}};

    default:
      return state;
  }
};