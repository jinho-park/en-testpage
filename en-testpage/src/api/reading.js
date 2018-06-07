import axios from 'axios';

export const getMain = ({Num}) => 
    axios.get('/api/v1.0/reading/get/main/'+(Num*1+1));

export const getTotal = () =>
    axios.get('/api/v1.0/reading/get/total');

export const getQuestion = ({Num}) => 
    axios.get('/api/v1.0/reading/get/question/' + (Num*1+1));

export const resAnswer = ({answer, user, pNum}) => 
    axios.post('/api/v1.0/reading/post/answer', {
        user,
        answer,
        pNum
    });