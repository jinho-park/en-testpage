import axios from 'axios';

export const getQuestion = () => 
    axios.get('/api/v1.0/speaking/get/question');

export const postAnswer = ({user, str}) =>
    axios.post('/api/v1.0/speaking/post/answer', {
        user,
        str
    });

export const requestAudio = ({file}) => 
    axios.get('/api/v1.0/speaking/get/listening/'+file);

export const requestList = () => 
    axios.get('/api/v1.0/speaking/get/list');

export const getMain = ({cNum}) =>
    axios.get('/api/v1.0/speaking/get/main/'+(cNum*1+2));