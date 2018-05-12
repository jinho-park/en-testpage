import axios from 'axios';

export const getQuestion = () => 
    axios.get('/api/v1.0/reading/get/problem');

export const postAnswer = ({audioData}) =>
    axios.post('/api/v1.0/reading/post');