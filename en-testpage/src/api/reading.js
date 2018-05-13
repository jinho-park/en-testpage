import axios from 'axios';

export const getMain = ({ctNum}) => 
    axios.get('/api/v1.0/reading/get/main/'+(ctNum*1+1));

export const getTotal = () =>
    axios.get('/api/v1.0/reading/get/total');

export const getQuestion = ({ctNum}) => 
    axios.get('/api/v1.0/reading/get/question/' + (ctNum*1+1));

export const resAnswer = ({answer, user}) => 
    axios.post('/api/v1.0/reading/post/answer', {
        user,
        answer
    });