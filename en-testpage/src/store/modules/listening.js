import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS, List } from 'immutable';
import { pender } from 'redux-pender';
import * as ListeningAPI from 'api/listening';

const LISTENING_GET_QUESTION = "listening/LISTENING_GET_QUESTION";
const LISTENING_CHOOSE_ANSWER = "listening/LISTENING_CHOOSE_ANSWER";
const LISTENING_POST_ANSWER = "listening/LISTENING_POST_ANSWER";
const LISTENING_CHANGE_PROBLEM = "listening/LISTENING_NEXT_PROBLEM";
const LISTENING_GET_LISTEN = "listening/LISTENING_NEXT_LISTEN";
const LISTENING_SET_TIME = "listening/LISTENING_SET_TIME";
const LISTENING_SET_TOTAL_TIME = "listening/LISTENING_SET_TOTAL_TIME";
const LISTENING_PLAY_SET = "listening/LISTENING_PLAY_SET";
const LISTENING_NEXT_LISTEN = "listening/LISTEING_NEXT_LISTEN";
const LISTENING_GET_LIST = "listening/LISTENING_GET_LIST";

export const listeningGetQuestion = createAction(LISTENING_GET_QUESTION, ListeningAPI.getQuestion);
export const listeningChooseAnswer = createAction(LISTENING_CHOOSE_ANSWER);
export const listeningPostAnswer = createAction(LISTENING_POST_ANSWER, ListeningAPI.reAnswer);
export const listeningChangeProblem = createAction(LISTENING_CHANGE_PROBLEM);
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
    [LISTENING_CHOOSE_ANSWER] : (state, action) => {
        const { e, cNum } = action.payload;
        return state.setIn(['chooseAnswer', cNum], e);
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
            return state;
        }
    }),
    [LISTENING_CHANGE_PROBLEM] : (state, action) => {
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
        return state.set('listen', false)
                    .set('cNum', 0);
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
        }
    })
}, initialState);