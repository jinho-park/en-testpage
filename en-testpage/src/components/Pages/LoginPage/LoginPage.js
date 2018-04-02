import React from 'react';
import { Login } from 'components';

const LoginPage = ({children}) => {
    console.log(children);
    return (
        <div>
            <Login/>
            {children}
        </div>
    )
}

export default LoginPage;