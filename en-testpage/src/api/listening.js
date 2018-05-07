import axios from 'axios';

export const getQuestion = () => 
    axios.get('/api/v1.0/listening/get/question');

export const reAnswer = ({answer}) =>
    axios.post('/api/v1.0/litening/post/answer', {
        answer
    });

export const getListening = ({num}) =>
    axios.get('/api/v1.0/listening/get/listening/'+{num});