import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS, List } from 'immutable';
//import * 
import { pender } from 'redux-pender';

const READING_CHOOSE_ANSWER = "reading/READING_CHOOSE_ANSWER";

export const readingChooseAnswer = createAction(READING_CHOOSE_ANSWER);

const initialState = Map({
    problem : null,
    cpNum : 0,
    chooseAnswer : List()
});

export default handleActions({
    [READING_CHOOSE_ANSWER] : (state, action) => {
        return state.set('cpNum', 0);
    }
}, initialState);