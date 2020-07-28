import data from '../config/fakeDb';
import actionTypes from '../actions/actionTypes';

export const processStepsReducer = () => {
    return data;
}


export const selectProcessReducer = (step = null, action) => {
    if (action.type === actionTypes.selectedProcess){
        return action.payload;
    }
    return step
}

export const findProcessReducer = (process = null, action) =>{
    if(action.type === actionTypes.findProcess) {
        return data.filter(p => p.id === action.payload);
    }

    return process;
}