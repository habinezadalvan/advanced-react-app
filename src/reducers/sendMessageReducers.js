import actionTypes from '../actions/actionTypes';


export const sendMessageReducer = (message= '', action) => {
    switch(action.type){
        case actionTypes.sendMessage: 
            return action.payload;
        case actionTypes.sendMessageError:
            return 'error occured';
        default:
            return message
    }
}