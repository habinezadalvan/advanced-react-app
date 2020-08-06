import actionTypes from '../actions/actionTypes';


export const FetchMembersReducer = (state = [], action) => {
    switch(action.type) {
        case actionTypes.department:
            return action.payload
        default:
            return state;
    }
}