import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS, List } from 'immutable';
//import * 
import { pender } from 'redux-pender';

const READING_CHOOSE_ANSWER = "reading/READING_CHOOSE_ANSWER";

export const readingChooseAnswer = createAction(READING_CHOOSE_ANSWER);

const initialState = Map({
    problem : List(),
    answer : List(),
    cproblem : ''
});

export default handleActions({
    [READING_CHOOSE_ANSWER] : (state, action) => {
        return state.set('cproblem', true);
    }
}, initialState);