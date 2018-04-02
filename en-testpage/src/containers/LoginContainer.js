import React, { Component, PropTypes } from 'react';
import { LoginPage } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class LoginContainer extends Component{
    onClickLoginhandle = () => {
        
    }
    
    render(){
        var options = {
            prefix : 'seconds elapsed',
            delay : 100
        };

        return(
            <LoginPage>
            </LoginPage>
        )
    }
}

export default connect()(withRouter(LoginContainer));