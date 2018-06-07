import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const SKIP_SET_TIME = "skip/SKIP_SET_TIME";

export const skipSetTime = createAction(SKIP_SET_TIME);

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
    [SKIP_SET_TIME] : (state, action) =>{
        return state.set('startTime', action.payload);
    }
}, initialState);