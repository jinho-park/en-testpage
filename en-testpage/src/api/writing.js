import axios from 'axios';

export const getQuestion = () => 
    axios.get('/api/v1.0/writing/get/question');

export const resAnswer = ({answer, user}) => 
    axios.post('/api/v1.0/writing/post/answer', {
        user,
        answer
    });