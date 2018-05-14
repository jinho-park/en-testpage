import axios from 'axios';

export const getQuestion = ({lNum}) => 
    axios.get('/api/v1.0/listening/get/problem/'+(lNum*1+1));

export const reAnswer = ({answer, user}) =>
    axios.post('/api/v1.0/listening/post/answer', {
        user,
        answer
    });

export const requestAudio = ({file}) => 
    axios.get('/api/v1.0/listening/get/listening/'+file);

export const requestList = () => 
    axios.get('/api/v1.0/listening/get/list');