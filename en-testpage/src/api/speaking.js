import axios from 'axios';

export const getQuestion = () => 
    axios.get('/api/v1.0/speaking/get/question');

export const postAnswer = ({user, str}) =>
    axios.post('/api/v1.0/speaking/post/answer', {
        user,
        str
    });