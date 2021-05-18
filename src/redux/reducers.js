import { combineReducers } from 'redux';
let initialState={
  user:{},
  users:[],
  company:[]
}
export const user = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {...state, user:action.data};
      case 'LOGOUT':
        return {};
      case 'USERS':
        return {...state, users:action.data } 
        case 'COMPANY':
          return{...state,company:action.data}
        default:
        return state;
    }
  };
  
export const reducers = combineReducers({user});