import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS, List } from 'immutable';
//import * as speakingAPI from 'api/speaking';
import { pender } from 'redux-pender';

const SPEAKING_INITIAL_ANSWER = "speaking/SPEAKING_INITAL_ANSWER";
const SPEAKING_GET_QUESTION = "speaking/SPEAKING_GET_QUESTION";
const SPEAKING_CHOOSE_ANSWER = "speaking/SPEAKING_CHOOSE_ANSWER";
const SPEAKING_POST_ANSWER = "speaking/SPEAKING_POST_ANSWER";
const SPEAKING_NEXT_PROBLEM = "speaking/SPEAKING_NEXT_PROBLEM";
const SPEAKING_PREV_PROBLEM = "speaking/SPEAKING_PREV_PROBLEM";
const SPEAKING_SET_TIME = "speaking/SPEAKING_SET_TIME";

export const speakingInitialAnswer = createAction(SPEAKING_INITIAL_ANSWER);
export const speakingChooseAnswer = createAction(SPEAKING_CHOOSE_ANSWER);
export const speakingGetQuestion = createAction(SPEAKING_GET_QUESTION);
export const speakingPostAnswer = createAction(SPEAKING_POST_ANSWER);
export const speakingNextProblem = createAction(SPEAKING_NEXT_PROBLEM);
export const speakingPrevProblem = createAction(SPEAKING_PREV_PROBLEM);
export const speakingSetTime = createAction(SPEAKING_SET_TIME);

const initialState = Map({
    problem : [
        {
            problem: 'hello~~~~~~',
            example : [1,2,3,4],
            answer : 0
        }
    ],
    tNum : 0,
    cpNum : 0,
    chooseAnswer : List()
});

export default handleActions({
    [SPEAKING_INITIAL_ANSWER] : (state, action) => {
        console.log(action.payload);
        const { cpNum } = action.payload;
        return state.setIn(['chooseAnswer', cpNum], 0);
    },
    [SPEAKING_CHOOSE_ANSWER] : (state, action) => {
        const { e, cpNum } = action.payload;

        return state.setIn(['chooseAnswer', cpNum], e);
    },
    ...pender({
        type : SPEAKING_GET_QUESTION,
        onSuccess : (state, action) => {
            const { question } = action.payload.data;
            return state.set('problem', question)
                        .set('tNum', question.length);
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
        return state.set('cpNum', action.payload);
    },
    [SPEAKING_PREV_PROBLEM] : (state, action) => {
        return state.set('cpNum', action.payload);
    },
    [SPEAKING_SET_TIME] : (state, action) =>{
        return state.set('startTime', action.payload);
    }
}, initialState);