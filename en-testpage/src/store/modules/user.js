import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS, List } from 'immutable';
//import * 
import { pender } from 'redux-pender';

const USER_SET_INPUT = "user/USER_SET_INPUT";
const USER_LOGIN = "user/USER_LOGIN";

export const userSetInput = createAction(USER_SET_INPUT);
export const userLogin = createAction(USER_LOGIN);

const initialState = Map({
    userName : null,
    isLogin : false,
    chapter : null
});

export default handleActions({
    [USER_SET_INPUT] : (state, action) => {
        return state.set('userName', action.payload);
    },
    [USER_LOGIN] : (state, action) => {
        const { value } = action.payload.userName;
        console.log(value);
        localStorage.setItem('user', value);
        return state.set('isLogin', true);
    }
}, initialState);