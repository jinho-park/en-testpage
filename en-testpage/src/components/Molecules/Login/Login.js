import React from 'react'
import { Button, Input } from 'components';

const Login = ({
    clickhandle, 
    changehandle, 
    onKeyPress,
    userName
}) => {
    return(
        <div>
            <Input 
                changehandle={changehandle}
                onKeyPress={onKeyPress}
                name="userName"
                value={userName}
            />
            <Button click={clickhandle}>로그인</Button>
        </div>
    )
}

export default Login;