import axios from 'axios';

export const getQuestion = () => 
    axios.get('/api/v1.0/speaking/get/problem');

export const postAnswer = ({user, audioData}) =>
    axios.post('/api/v1.0/speaking/post/answer', {
        user,
        audioData
    });