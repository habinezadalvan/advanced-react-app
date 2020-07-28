import actionTypes from './actionTypes';

export const selectProcess = (process) => {
    return {
        type: actionTypes.selectedProcess,
        payload: process
    }
};

export const findProcess = (id) => {
    return {
        type: actionTypes.findProcess,
        payload: id,
    }
}
