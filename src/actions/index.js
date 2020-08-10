import axios from 'axios';

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

const fetchPeople = async () => {
    const data = await axios.get(`${actionTypes.BACK_END_BASE_URL}/people`);
    return data;
}

export const sendMessageAction = (userInput) => async dispatch => {
    const data = await axios.post(`${actionTypes.BACK_END_BASE_URL}/contact`, userInput);
    console.log('data.data.message', data);
    dispatch({type: actionTypes.sendMessage, payload: data});
   }

export const fetchMembers = () => async dispatch => {
    const data = await fetchPeople();
    dispatch({type: actionTypes.members, payload: data});
}

export const fetchDepartment = (department) => async dispatch => {
    const data = await fetchPeople();
    const departmentMembers = data.data.filter(member => member.department.toLowerCase() === department.toLowerCase());
    dispatch({type: actionTypes.department, payload: departmentMembers});
}

