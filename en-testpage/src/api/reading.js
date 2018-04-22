import axios from 'axios';

export const getQuestion = () => 
    axios.get('/api/v1.0/reading/get/question');

export const resAnswer = ({answer}) => 
    axios.post('/api/v1.0/reading/post/answer', {
        answer
    });