import axios from 'axios';

export const getMain = ({num}) => 
    axios.get('/api/v1.0/reading/get/main/'+num);

export const getTotal = () =>
    axios.get('/api/v1.0/reading/get/total/');

export const getQuestion = ({num}) => 
    axios.get('/api/v1.0/reading/get/question/' + num);

export const resAnswer = ({answer, user}) => 
    axios.post('/api/v1.0/reading/post/answer', {
        user,
        answer
    });