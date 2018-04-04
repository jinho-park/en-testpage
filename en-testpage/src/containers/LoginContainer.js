import React, { Component } from 'react';
import { Login } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as readingActions from 'store/modules/reading';

class LoginContainer extends Component{
    onClickLoginhandle = () => {
        
    }
    
    render(){
        var options = {
            prefix : 'seconds elapsed',
            delay : 100
        };
        console.log(readingActions);
        return(
            <Login >
            </Login>
        )
    }
}

export default connect(
    /*(state) => ({
        question : state.reading.get('question')
    }),
    (dispatch) => ({
        ReadingActions : bindActionCreators(readingActions, dispatch)
    })*/
)(withRouter(LoginContainer));