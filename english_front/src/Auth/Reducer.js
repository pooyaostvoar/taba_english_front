import { createStore } from 'redux';
const get_initial_state = () => {
    let user  = localStorage.getItem("user");
    if(user){
      return JSON.parse(user);
    }
    return {};
}
export const authReducer = function(state = { user: get_initial_state() }, action) {
  switch (action.type) {
    case 'login':
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      return { user: action.payload.user }
    case 'logout':
      localStorage.setItem("user", JSON.stringify({}))
      return { user: {} }
    default:
      return state
  }
}
