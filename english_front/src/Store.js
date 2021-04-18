import { createStore } from 'redux'
import {authReducer} from './Auth/Reducer'
export const store = createStore(authReducer);
