import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import * as writingAPI from 'api/writing';
import { pender } from 'redux-pender';

const WRITING_INITIAL_ANSWER = "writing/WRITING_INITAL_ANSWER";
const WRITING_CHANGE_ANSWER = "writing/WRTING_CHANGE_ANSWER";
const WRITING_GET_QUESTION = "writing/WRITING_GET_QUESTION";
const WRITING_POST_ANSWER = "writing/WRITING_POST_ANSWER";
const WRITING_NEXT_PROBLEM = "writing/WRITING_NEXT_PROBLEM";
const WRITING_PREV_PROBLEM = "writing/WRITING_PREV_PROBLEM";
const WRITING_SET_TIME = "writing/WRITING_SET_TIME";
const WRITING_GET_LIST = "writing/WRITING_GET_LIST";
const WRITING_CHANGE_CONDITION = "writing/WRITING_CHANGE_CONDITION";

export const writingInitialAnswer = createAction(WRITING_INITIAL_ANSWER);
export const writingChangeAnswer = createAction(WRITING_CHANGE_ANSWER);
export const writingGetQuestion = createAction(WRITING_GET_QUESTION, writingAPI.getQuestion);
export const writingPostAnswer = createAction(WRITING_POST_ANSWER, writingAPI.resAnswer);
export const writingNextProblem = createAction(WRITING_NEXT_PROBLEM);
export const writingPrevProblem = createAction(WRITING_PREV_PROBLEM);
export const writingSetTime = createAction(WRITING_SET_TIME);
export const writingGetList = createAction(WRITING_GET_LIST, writingAPI.getList);
export const writingChangeCondition = createAction(WRITING_CHANGE_CONDITION);

const initialState = Map({
    problem : List(),
    tNum : 0,
    cpNum : 0,
    answer : List(),
    cond : true,
    list : List()
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
            const { problem } = action.payload.data;
            return state.set('problem', problem)
                        .set('tNum', problem.length)
                        .set('cond', false)
                        .set('cpNum', 0);
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
    [WRITING_SET_TIME] : (state, action) =>{
        return state.set('wStartTime', action.payload);
    },
    ...pender({
        type : WRITING_GET_LIST,
        onSuccess : (state, action) => {
            const { filelist } =action.payload.data;
            console.log(filelist);
            return state.set('list', filelist)
                        .set('tNum', filelist.length);
        }
    }),
    [WRITING_CHANGE_CONDITION] : (state, action) => {
        return state.set('cond', false)
                    .set('cpNum', 0);
    }
}, initialState);