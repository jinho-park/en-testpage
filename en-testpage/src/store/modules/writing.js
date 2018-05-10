import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender } from 'redux-pender';

const WRITING_INITIAL_ANSWER = "writing/WRITING_INITAL_ANSWER";
const WRITING_CHANGE_ANSWER = "writing/WRTING_CHANGE_ANSWER";
const WRITING_GET_QUESTION = "writing/WRITING_GET_QUESTION";
const WRITING_POST_ANSWER = "writing/WRITING_POST_ANSWER";
const WRITING_NEXT_PROBLEM = "writing/WRITING_NEXT_PROBLEM";
const WRITING_PREV_PROBLEM = "writing/WRITING_PREV_PROBLEM";
const WIRTING_SET_TIME = "writing/WRITING_SET_TIME";

export const writingInitialAnswer = createAction(WRITING_INITIAL_ANSWER);
export const writingChangeAnswer = createAction(WRITING_CHANGE_ANSWER);
export const writingGetQuestion = createAction(WRITING_GET_QUESTION);
export const writingPostAnswer = createAction(WRITING_POST_ANSWER);
export const writingNextProblem = createAction(WRITING_NEXT_PROBLEM);
export const writingPrevProblem = createAction(WRITING_PREV_PROBLEM);
export const writingSetTime = createAction(WIRTING_SET_TIME);

const initialState = Map({
    problem : List(),
    tNum : 0,
    cpNum : 0,
    answer : List()
});

export default handleActions({
    [WRITING_INITIAL_ANSWER] : (state, action) =>{
        const { cpNum } = action.payload;
        return state.setIn(['answer', cpNum], '');
    },
    [WRITING_CHANGE_ANSWER] : (state, action) => {
        const { cpNum, data } = action.payload;
        return state.setIn(['answer', cpNum], data);
    },
    ...pender({
        type : WRITING_GET_QUESTION,
        onSuccess : (state, action) => {
            const { question } = action.payload.data;
            return state.set('problem', question)
                        .set('tNum', question.length);
        }
    }),
    ...pender({
        type : WRITING_POST_ANSWER,
        onSuccess : (state, action) => {
            const { data } = action.payload;
            return;
        }
    }),
    [WRITING_NEXT_PROBLEM] : (state, action) => {
        return state.set('cpNum', action.payload);
    },
    [WRITING_PREV_PROBLEM] : (state, action) => {
        return state.set('cpNum', action.payload);
    },
    [WIRTING_SET_TIME] : (state, action) =>{
        return state.set('wStartTime', action.payload);
    }
}, initialState);