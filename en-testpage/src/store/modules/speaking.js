import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import * as speakingAPI from 'api/speaking';
import { pender } from 'redux-pender';

const SPEAKING_GET_QUESTION = "speaking/SPEAKING_GET_QUESTION";
const SPEAKING_POST_ANSWER = "speaking/SPEAKING_POST_ANSWER";
const SPEAKING_NEXT_PROBLEM = "speaking/SPEAKING_NEXT_PROBLEM";
const SPEAKING_PREV_PROBLEM = "speaking/SPEAKING_PREV_PROBLEM";
const SPEAKING_SET_TIME = "speaking/SPEAKING_SET_TIME";

export const speakingGetQuestion = createAction(SPEAKING_GET_QUESTION, speakingAPI.getQuestion);
export const speakingPostAnswer = createAction(SPEAKING_POST_ANSWER, speakingAPI.postAnswer);
export const speakingNextProblem = createAction(SPEAKING_NEXT_PROBLEM);
export const speakingPrevProblem = createAction(SPEAKING_PREV_PROBLEM);
export const speakingSetTime = createAction(SPEAKING_SET_TIME);

const initialState = Map({
    problem : ["this is problem!!"],
    tNum : 1,
    cNum : 0,
    recordData : null,
    total : 60,
    start : 40,
});

export default handleActions({
    ...pender({
        type : SPEAKING_GET_QUESTION,
        onSuccess : (state, action) => {
            const { data } = action.payload;
            return state.set('problem', data.question)
                        .set('tNum', data.question.length);
        }
    }),
    ...pender({
        type : SPEAKING_POST_ANSWER,
        onSuccess : (state, action) => {
            const { data } = action.payload;
            return;
        }
    }),
    [SPEAKING_NEXT_PROBLEM] : (state, action) => {
        return state.set('cNum', action.payload);
    },
    [SPEAKING_PREV_PROBLEM] : (state, action) => {
        return state.set('cNum', action.payload);
    },
    [SPEAKING_SET_TIME] : (state, action) =>{
        return state.set('sStartTime', action.payload);
    }
}, initialState);