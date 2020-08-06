import actionTypes from '../actions/actionTypes';


export const sendMessageReducer = (message= {}, action) => {
    if (action.type === actionTypes.sendMessage) {
        return {
            ...message,
            ...action.payload,
        }
    }
    return message;
}