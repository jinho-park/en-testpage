import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS, List } from 'immutable';
import * as ReadingAPI from 'api/reading';
import { pender } from 'redux-pender';

const READING_GET_QUESTION = "reading/READING_GET_QUESTION";
const READING_CHOOSE_ANSWER = "reading/READING_CHOOSE_ANSWER";
const READING_POST_ANSWER = "reading/READING_POST_ANSWER";

export const readingChooseAnswer = createAction(READING_CHOOSE_ANSWER);
export const readingGetQuestion = createAction(READING_GET_QUESTION, ReadingAPI.getQuestion);
export const readingPostAnswer = createAction(READING_POST_ANSWER, ReadingAPI.resAnswer);

const initialState = Map({
    problem : null,
    tNum : null,
    cpNum : 0,
    chooseAnswer : null
});

export default handleActions({
    [READING_CHOOSE_ANSWER] : (state, action) => {
        return state.set('cpNum', 0);
    },
    ...pender({
        type : READING_GET_QUESTION,
        onSuccess : (state, action) => {
            console.log(action);

        }
    }),
    ...pender({
        type : READING_POST_ANSWER,
        onSuccess : (state, action) => {
            console.log(action);
        }
    })
}, initialState);