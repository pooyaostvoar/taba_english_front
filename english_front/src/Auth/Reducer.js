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
      window.location.href = '/'; 
      return { user: action.payload.user }
    case 'logout':
      localStorage.setItem("user", JSON.stringify({}))
      window.location.href = '/';
      return { user: {} }
    default:
      return state
  }
}
