import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import * as speakingAPI from 'api/speaking';
import { pender } from 'redux-pender';

const SPEAKING_GET_QUESTION = "speaking/SPEAKING_GET_QUESTION";
const SPEAKING_POST_ANSWER = "speaking/SPEAKING_POST_ANSWER";
const SPEAKING_NEXT_PROBLEM = "speaking/SPEAKING_NEXT_PROBLEM";
const SPEAKING_PREV_PROBLEM = "speaking/SPEAKING_PREV_PROBLEM";
const SPEAKING_SET_TIME = "speaking/SPEAKING_SET_TIME";
const SPEAKING_PLAY_SET = "speaking/SPEAKING_PLAY_SET";
const SPEAKING_NEXT_LISTEN = "speaking/SPEAKING_NEXT_LISTEN";
const SPEAKING_GET_LIST = "speaking/SPEAKING_GET_LIST";

export const speakingGetQuestion = createAction(SPEAKING_GET_QUESTION, speakingAPI.getQuestion);
export const speakingPostAnswer = createAction(SPEAKING_POST_ANSWER, speakingAPI.postAnswer);
export const speakingNextProblem = createAction(SPEAKING_NEXT_PROBLEM);
export const speakingPrevProblem = createAction(SPEAKING_PREV_PROBLEM);
export const speakingSetTime = createAction(SPEAKING_SET_TIME);
export const speakingPlaySet = createAction(SPEAKING_PLAY_SET);
export const speakingNextListen = createAction(SPEAKING_NEXT_LISTEN);
export const speakingGetList = createAction(SPEAKING_GET_LIST, speakingAPI.requestList);

const initialState = Map({
    listening : List(),
    problem : ["this is problem!!"],
    tNum : 1,
    cNum : 0,
    recordData : null,
    total : [30],
    start : [25],
    listen : true,
});

export default handleActions({
    ...pender({
        type : SPEAKING_GET_QUESTION,
        onSuccess : (state, action) => {
            const { data } = action.payload;
            return state.set('problem', data.question)
                        .set('tNum', data.question.length)
                        .set('total', data.total)
                        .set('start', data.start);
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
    },
    [SPEAKING_PLAY_SET] : (state, action) => {
        return state.set('listen', false);
    },
    [SPEAKING_NEXT_LISTEN] : (state, action) => {
        return state.set('listen', true);
    },
    ...pender({
        type : SPEAKING_GET_LIST,
        onSuccess : (state, action) => {
            const { list } = action.payload.data;
            return state.set('listening', list)
        },
        onPending : (state, action) => {
            console.log(action.payload);
            return;
        },
        onFailure : (state ,action) => {
            console.log(action.payload);
            return;
        }
    })
}, initialState);