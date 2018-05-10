import axios from 'axios';

export const getQuestion = () => 
    axios.get('/api/v1.0/listening/get/question');

export const reAnswer = ({answer, user}) =>
    axios.post('/api/v1.0/litening/post/answer', {
        user,
        answer
    });