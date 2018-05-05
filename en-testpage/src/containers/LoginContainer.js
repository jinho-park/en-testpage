import React, { Component } from 'react';
import { Login } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as userActions from 'store/modules/user';

class LoginContainer extends Component{
    handleKeyPress = (e) => {
        if(e.key !== 'Enter') return;
        console.log('get');

        this.onLoginhandle();
    }

    onChangeInput = (e) => {
        const { UserActions } = this.props;
        const { name, value } = e.target;

        UserActions.userSetInput({value});
    }

    onLoginhandle = () => {
        const { UserActions } = this.props;
        const { userName, history } = this.props;

        UserActions.userLogin({userName});

        history.push('/reading');
    }
    
    render(){
        const {
            onLoginhandle,
            onChangeInput,
            handleKeyPress
        } = this;
        const {
            userName
        } = this.props;

        return(
            <Login 
                changehandle={onChangeInput}
                clickhandle={onLoginhandle}
                onKeyPress={handleKeyPress}
                userName={userName}
            >
            </Login>
        )
    }
}

export default connect(
    (state) => ({
        userName : state.user.get('userName'),
        isLogin : state.user.get('isLogin')
    }),
    (dispatch) => ({
        UserActions : bindActionCreators(userActions, dispatch)
    })
)(withRouter(LoginContainer));