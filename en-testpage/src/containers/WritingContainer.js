import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as writingActions from 'store/modules/writing';
import { WIndepentContainer, WTotalContainer } from 'containers';

class WritingContainer extends Component{
    componentWillMount(){
        const { WritingActions } = this.props;

        WritingActions.writingGetQuestion();
        WritingActions.writingGetList();
    }
    
    render(){
        const { type } = this.props;

        return(
            type ? <WIndepentContainer/> : <WTotalContainer/>
        )
    }
}

export default connect(
    (state) => ({
        type : state.writing.get('type')
    }),
    (dispatch) => ({
        WritingActions : bindActionCreators(writingActions, dispatch)
    })
)(withRouter(WritingContainer));