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

export const listeningGetQuestion = createAction(LISTENING_GET_QUESTION, ListeningAPI.getQuestion);
export const listeningInitialAnswer = createAction(LISTENING_INITIAL_ANSWER);
export const listeningChooseAnswer = createAction(LISTENING_CHOOSE_ANSWER);
export const listeningPostAnswer = createAction(LISTENING_POST_ANSWER, ListeningAPI.reAnswer);
export const listeningNextProblem = createAction(LISTENING_NEXT_PROBLEM);
export const listeningPrevProblem = createAction(LISTENING_PREV_PROBLEM);
export const listeningGetListen = createAction(LISTENING_GET_LISTEN, ListeningAPI.getListening);

const initialState = Map({
    listening : null,
    tproblem : List(Map()),
    problem : List(),
    cNum: 0,
    lNum : 0,
    tNum : 0,
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
            return state.set('tproblem', question)
                        .set('lNum', question[0].length)
                        .set('problem', question[0])
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
    ...pender({
        type : LISTENING_GET_LISTEN,
        onSuccess : (state, action) => {
            const { data } = action.payload;
            return state.set('listening', data);
        }
    })
}, initialState);