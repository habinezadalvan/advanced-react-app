import {combineReducers} from 'redux'; 
import {selectProcessReducer, processStepsReducer, findProcessReducer} from './ourProcessReducers';

export const reducers = combineReducers({
    steps: processStepsReducer,
    selectedProcess: selectProcessReducer,
    process: findProcessReducer
})
