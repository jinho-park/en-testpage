import React, { Component } from 'react';
import { Header } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as readingActions from 'store/modules/reading';

class HeaderContainer extends Component{
    render(){
        return(
            <Header/>
        );
    }
}

export default connect(
    (state) => ({
        rcNum : state.reading.get('cpNum')
    }),
    (dispatch) => ({
        ReadingActions : bindActionCreators(readingActions, dispatch)
    })
)(withRouter(HeaderContainer));