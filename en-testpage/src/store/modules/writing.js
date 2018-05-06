import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS, List } from 'immutable';
import { pender } from 'redux-pender';

const WRITING_INITIAL_ANSWER = "writing/WRITING_INITAL_ANSWER";
const WRITING_CHANGE_ANSWER = "writing/WRTING_CHANGE_ANSWER";
const WRITING_GET_QUESTION = "writing/WRITING_GET_QUESTION";
const WRITING_POST_ANSWER = "writing/WRITING_POST_ANSWER";

export const wrintInitialAnswer = createAction(WRITING_INITIAL_ANSWER);
export const writingChangeAnswer = createAction(WRITING_CHANGE_ANSWER);
export const writingGetQuestion = createAction(WRITING_GET_QUESTION);
export const writingPostAnswer = createAction(WRITING_POST_ANSWER);

const initialState = Map({
    problem : '',
    tNum : 1,
    cpNum : 0,
    chooseAnswer : List()
});

export default handleActions({
    [WRITING_INITIAL_ANSWER] : (state, action) =>{
        return;
    },
    [WRITING_CHANGE_ANSWER] : (state, action) => {
        const { cpNum, e } = action.payload;
        return state.setIn(['chooseAnswer', cpNum], e);
    }
}, initialState);