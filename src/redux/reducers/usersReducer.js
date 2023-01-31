import GET_USER from "../actionTypes/usersAC"
import GET_ALL_USERS from "../actionTypes/usersAC"

const initialState = { users : []}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: {

    }
    case GET_ALL_USERS: {

    }
    default: 
      return state
  }
}