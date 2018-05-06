import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS, List } from 'immutable';
import * as ReadingAPI from 'api/reading';
import { pender } from 'redux-pender';

const READING_INITIAL_ANSWER = "reading/READING_INITAL_ANSWER";
const READING_GET_QUESTION = "reading/READING_GET_QUESTION";
const READING_CHOOSE_ANSWER = "reading/READING_CHOOSE_ANSWER";
const READING_POST_ANSWER = "reading/READING_POST_ANSWER";
const READING_NEXT_PROBLEM = "reading/READING_NEXT_PROBLEM";
const READING_PREV_PROBLEM = "reading/READING_PREV_PROBLEM";

export const readingInitialAnswer = createAction(READING_INITIAL_ANSWER);
export const readingChooseAnswer = createAction(READING_CHOOSE_ANSWER);
export const readingGetQuestion = createAction(READING_GET_QUESTION, ReadingAPI.getQuestion);
export const readingPostAnswer = createAction(READING_POST_ANSWER, ReadingAPI.resAnswer);
export const readingNextProblem = createAction(READING_NEXT_PROBLEM);
export const readintPrevProblem = createAction(READING_PREV_PROBLEM);

const initialState = Map({
    problem : [
        {
            problem: 'hello~~~~~~',
            example : [1,2,3,4],
            answer : 0
        }
    ],
    tNum : 1,
    cpNum : 0,
    chooseAnswer : List()
});

export default handleActions({
    [READING_INITIAL_ANSWER] : (state, action) => {
        console.log(action.payload);
        return state.setIn(['chooseAnswer', action.payload], 0);
    },
    [READING_CHOOSE_ANSWER] : (state, action) => {
        const { e, cpNum } = action.payload;

        return state.setIn(['chooseAnswer', cpNum], e);
    },
    ...pender({
        type : READING_GET_QUESTION,
        onSuccess : (state, action) => {
            const { question } = action.payload.data;
            console.log(question);
            return state.set('problem', question)
                        .set('tNum', question.length);
        }
    }),
    ...pender({
        type : READING_POST_ANSWER,
        onSuccess : (state, action) => {
            const { data } = action.payload;
            console.log("data" + data);
            return state.set('problem', data);
        }
    }),
    [READING_NEXT_PROBLEM] : (state, action) => {
        return state.set('cpNum', action.payload);
    },
    [READING_PREV_PROBLEM] : (state, action) => {
        return state.set('cpNum', action.payload);
    }
}, initialState);