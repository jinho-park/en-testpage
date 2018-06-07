import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import * as ReadingAPI from 'api/reading';
import { pender } from 'redux-pender';

const READING_INITIAL_ANSWER = "reading/READING_INITAL_ANSWER";
const READING_GET_MAIN = "reading/READING_GET_MAIN";
const READING_GET_QUESTION = "reading/READING_GET_QUESTION";
const READING_GET_TOTAL = "reading/READING_GET_TOTAL";
const READING_CHOOSE_ANSWER = "reading/READING_CHOOSE_ANSWER";
const READING_POST_ANSWER = "reading/READING_POST_ANSWER";
const READING_CHANGE_PROBLEM = "reading/READING_CHANGE_PROBLEM";
const READING_SET_TIME = "reading/READING_SET_TIME";
const READING_CHANGE_MAIN = "reading/READING_CHANGE_MAIN";

export const readingInitialAnswer = createAction(READING_INITIAL_ANSWER);
export const readingChooseAnswer = createAction(READING_CHOOSE_ANSWER);
export const readingGetMain = createAction(READING_GET_MAIN, ReadingAPI.getMain);
export const readingGetTotal = createAction(READING_GET_TOTAL, ReadingAPI.getTotal);
export const readingGetQuestion = createAction(READING_GET_QUESTION, ReadingAPI.getQuestion);
export const readingPostAnswer = createAction(READING_POST_ANSWER, ReadingAPI.resAnswer);
export const readingChangeProblem = createAction(READING_CHANGE_PROBLEM);
export const readingSetTime = createAction(READING_SET_TIME);
export const readingChangeMain = createAction(READING_CHANGE_MAIN);

const initialState = Map({
    main : '<mark>본문</mark><br/>asdf',
    problem : [
        {
            problem: 'hello~~~~~~',
            example : [1,2,3,4],
            answer : 0
        }
    ],
    tNum : 0,
    pNum : 0,
    ctNum : 0,
    cNum : 0,
    chooseAnswer : List()
});

export default handleActions({
    [READING_INITIAL_ANSWER] : (state, action) => {
        const { cNum } = action.payload;
        return state.setIn(['chooseAnswer', cNum], 0);
    },
    [READING_CHOOSE_ANSWER] : (state, action) => {
        const { e, cNum } = action.payload;

        return state.setIn(['chooseAnswer', cNum], e);
    },
    [READING_CHANGE_MAIN] : (state, action) => {
        return state.set('pNum', action.payload);
    },
    ...pender({
        type : READING_GET_QUESTION,
        onSuccess : (state, action) => {
            const { question } = action.payload.data;
            return state.set('problem', question)
                        .set('tNum', question.length)
                        .set('cNum', 0);
        }
    }),
    ...pender({
        type : READING_POST_ANSWER,
        onSuccess : (state, action) => {
            const { data } = action.payload;
            //localStorage.setItem('reading', data);
            return state;
        }
    }),
    [READING_CHANGE_PROBLEM] : (state, action) => {
        return state.set('cNum', action.payload);
    },
    [READING_SET_TIME] : (state, action) =>{
        return state.set('rStartTime', action.payload);
    },
    ...pender({
        type : READING_GET_MAIN,
        onSuccess : (state, action) => {
            const { data } = action.payload;
            return state.set('main', data);
        }
    }),
    ...pender({
        type : READING_GET_TOTAL,
        onSuccess : (state, action) => {
            const { problemNumber } = action.payload.data;
            return state.set('ctNum', problemNumber);
        }
    })
}, initialState);