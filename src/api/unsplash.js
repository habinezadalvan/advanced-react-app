import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID BmFgoVF7OZh8mmqp7DB3qTabH5V2xg8h0iojSOYunOM'
    }
})