import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS, List } from 'immutable';
import { pender } from 'redux-pender';

const WRITING_INITAL_ANSWER = "writing/WRITING_INITAL_ANSWER";
const WRITING_CHANGE_ANSWER = "writing/WRTING_CHANGE_ANSWER";
const WRITING_GET_QUESTION = "writing/WRITING_GET_QUESTION";
const WRITING_POST_ANSWER = "writing/WRITING_POST_ANSWER";

export const wrintInitialAnswer = createAction(WRITING_INITIAL_ANSWER);
export const writingChangeAnswer = createAction(WRITING_CHANGE_ANSWER);
export const writingGetQuestion = createAction(WRITING_GET_QUESTION);
export const writingPostAnswer = createAction(WRITING_POST_ANSWER);

const initialState = Map({
    problem : null,
    tNum : null,
    cpNum : 0,
    chooseAnswer : List()
});

export default handleActions({
    [WRITING_INITAL_ANSWER] : (state, action) =>{
        return;
    }
}, initialState);