import {combineReducers} from 'redux'; 
import {processStepsReducer, findProcessReducer} from './ourProcessReducers';

export const reducers = combineReducers({
    steps: processStepsReducer,
    process: findProcessReducer
})
