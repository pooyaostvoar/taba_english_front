import { createStore } from 'redux';

export const authReducer = function(state = { user: 0 }, action) {
  switch (action.type) {
    case 'login':
      return { user: action.payload.user }
    case 'logout':
      return { user: {} }
    default:
      return state
  }
}
