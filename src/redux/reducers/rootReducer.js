import { combineReducers } from "redux";

import { usersReducer } from "./usersReducer";
import { sessionReducer } from "./sessionReducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  session: sessionReducer,
});
