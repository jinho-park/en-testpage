import React from 'react';
import { LoginContainer } from 'containers';

const LoginPage = () => {
    localStorage.removeItem('readingTest');
    localStorage.removeItem('writingTest');
    localStorage.removeItem('listeningTest');
    localStorage.removeItem('speakingTest');
    return (
        <LoginContainer/>
    )
}

export default LoginPage;