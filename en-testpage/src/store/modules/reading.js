import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS, List } from 'immutable';
import * as ReadingAPI from 'api/reading';
import { pender } from 'redux-pender';

const READING_INITIAL_ANSWER = "reading/READING_INITAL_ANSWER";
const READING_GET_QUESTION = "reading/READING_GET_QUESTION";
const READING_CHOOSE_ANSWER = "reading/READING_CHOOSE_ANSWER";
const READING_POST_ANSWER = "reading/READING_POST_ANSWER";


export const readingInitialAnswer = createAction(READING_INITIAL_ANSWER);
export const readingChooseAnswer = createAction(READING_CHOOSE_ANSWER);
export const readingGetQuestion = createAction(READING_GET_QUESTION, ReadingAPI.getQuestion);
export const readingPostAnswer = createAction(READING_POST_ANSWER, ReadingAPI.resAnswer);

const initialState = Map({
    problem : null,
    tNum : null,
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
            console.log(action.payload.data);
            const { question } = action.payload.data;
            const data = fromJS(question);
            console.log(data.question.length);
            return state.set('problem', data)
                        .set('tNum', data.question.length);
        }
    }),
    ...pender({
        type : READING_POST_ANSWER,
        onSuccess : (state, action) => {
            const { data } = action.payload;
            console.log("data" + data);
            return state.set('problem', data);
        }
    })
}, initialState);