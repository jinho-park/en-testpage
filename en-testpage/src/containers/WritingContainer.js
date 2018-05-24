import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { QWriting, TWriting } from 'components';
import * as writingActions from 'store/modules/writing';

class WritingContainer extends Component{
    componentWillMount(){
        const { WritingActions } = this.props;
    }

    onChange = (e) => {
        const { WritingActions } = this.props;
        const { cpNum } = this.props;
        const data = e.target.value;

        WritingActions.writingChangeAnswer({data, cpNum});
    }
    
    render(){
        const { cpNum, problem, answer, cond, list } = this.props;
        const { onChange } = this;
        const { WritingActions } = this.props;
        const data = answer.toJS();
        const thisUrl = localStorage.getItem('thisUrl');
        const url = thisUrl + 'api/v1.0/writing/get/audio/'+ list[cpNum];

        if(data[cpNum] === undefined || cond)
            WritingActions.writingInitialAnswer({cpNum});
//
        return(
            cond ? <TWriting onChangehandle={onChange} url={url}/> : <QWriting question={problem[cpNum]} onChangehandle={onChange} answer={data[cpNum]}/>
        )
    }
}

export default connect(
    (state) => ({
        problem : state.writing.get('problem'),
        cpNum : state.writing.get('cpNum'),
        answer : state.writing.get('answer'),
        cond : state.writing.get('cond'),
        list : state.writing.get('list')
    }),
    (dispatch) => ({
        WritingActions : bindActionCreators(writingActions, dispatch)
    })
)(withRouter(WritingContainer));