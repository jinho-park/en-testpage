import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS, List } from 'immutable';
import { pender } from 'redux-pender';
import * as ListeningAPI from 'api/listening';

const LISTENING_GET_QUESTION = "listening/LISTENING_GET_QUESTION";
const LISTENING_INITIAL_ANSWER = "listening/LISTENING_INITIAL_ANSWER";
const LISTENING_CHOOSE_ANSWER = "listening/LISTENING_CHOOSE_ANSWER";
const LISTENING_POST_ANSWER = "listening/LISTENING_POST_ANSWER";
const LISTENING_NEXT_PROBLEM = "listening/LISTENING_NEXT_PROBLEM";
const LISTENING_PREV_PROBLEM = "listening/LISTENING_PREV_PROBLEM";
const LISTENING_GET_LISTEN = "listening/LISTENING_NEXT_LISTEN";
const LISTENING_SET_TIME = "listening/LISTENING_SET_TIME";
const LISTENING_SET_TOTAL_TIME = "listening/LISTENING_SET_TOTAL_TIME";
const LISTENING_PLAY_SET = "listening/LISTENING_PLAY_SET";
const LISTENING_NEXT_LISTEN = "listening/LISTEING_NEXT_LISTEN";
const LISTENING_GET_LIST = "listening/LISTENING_GET_LIST";

export const listeningGetQuestion = createAction(LISTENING_GET_QUESTION, ListeningAPI.getQuestion);
export const listeningInitialAnswer = createAction(LISTENING_INITIAL_ANSWER);
export const listeningChooseAnswer = createAction(LISTENING_CHOOSE_ANSWER);
export const listeningPostAnswer = createAction(LISTENING_POST_ANSWER, ListeningAPI.reAnswer);
export const listeningNextProblem = createAction(LISTENING_NEXT_PROBLEM);
export const listeningPrevProblem = createAction(LISTENING_PREV_PROBLEM);
export const listeningSetTime = createAction(LISTENING_SET_TIME);
export const listeningSetTotalTime = createAction(LISTENING_SET_TOTAL_TIME);
export const listeningPlaySet = createAction(LISTENING_PLAY_SET);
export const listeningNextListen = createAction(LISTENING_NEXT_LISTEN);
export const listeningGetList = createAction(LISTENING_GET_LIST, ListeningAPI.requestList);

const initialState = Map({
    listening : List(),
    problem : [
        {
            problem: 'hello~~~~~~',
            example : [1,2,3,4],
            answer : 0
        }
    ],
    cNum: 0, //current problem number about one listening file
    lNum : 0, //number of listening file
    tNum : 1, //total problem bumber about one listening file
    tlNum : 1, //total number of listening file
    chooseAnswer : List(),
    listen : true
});

export default handleActions({
    [LISTENING_INITIAL_ANSWER] : (state, action) => {
        const { cNum, lNum } = action.payload;
        return state.setIn(['chooseAnswer', cNum+lNum], 0);
    },
    [LISTENING_CHOOSE_ANSWER] : (state, action) => {
        const { e, cNum, lNum } = action.payload;
        return state.setIn(['chooseAnswer', cNum+lNum], e);
    },
    ...pender({
        type: LISTENING_GET_QUESTION,
        onSuccess : (state, action) => {
            const { question } = action.payload.data;
            console.log(action.payload.data);
            return state.set('problem', question)
                        .set('tNum', question.length);
        }
    }),
    ...pender({
        type : LISTENING_POST_ANSWER,
        onSuccess : (state, action) => {
            const { data } = action.payload;
            console.log(data);
            return;
        }
    }),
    [LISTENING_NEXT_PROBLEM] : (state, action) => {
        return state.set('cNum', action.payload);
    },
    [LISTENING_PREV_PROBLEM] : (state, action) => {
        return state.set('cNum', action.payload);
    },
    [LISTENING_SET_TIME] : (state, action) =>{
        return state.set('lStartTime', action.payload);
    },
    [LISTENING_SET_TOTAL_TIME] : (state, action) =>{
        return state.set('lTotalTime', action.payload);
    },
    [LISTENING_PLAY_SET] : (state, action) => {
        console.log('change');
        return state.set('listen', false);
    },
    [LISTENING_NEXT_LISTEN] : (state, action) => {
        return state.set('lNum', action.payload)
                    .set('listen', true);
    },
    ...pender({
        type : LISTENING_GET_LIST,
        onSuccess : (state, action) => {
            const { list } = action.payload.data;
            return state.set('listening', list)
                        .set('tlNum', list.length);
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