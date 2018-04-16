import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as readingActions from 'store/modules/reading';

class ReadingContainer extends Component{
    render(){
        return(
            <div></div>
        )
    }
}

export default connect(
    (state) => ({
        tNum : state.reading.get('tNum'),
        cpNum : state.reading.get('cpNum'),
        problem : state.reading.get('problem'),
        chooseAnswer : state.reading.get('chooseAnswer')
    }),
    (dispatch) => ({
        ReadingActions : bindActionCreators(readingActions, dispatch)
    })
)(withRouter(ReadingContainer));