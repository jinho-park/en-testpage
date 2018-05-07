import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { QWriting } from 'components';
import * as writingActions from 'store/modules/writing';

class WritingContainer extends Component{
    componentWillMount(){
        const { WritingActions } = this.props;
        WritingActions.writingGetQuestion();
    }

    onChange = (e) => {
        const { WritingActions } = this.props;
        const { cpNum } = this.props;

        WritingActions.writingChangeAnswer({e, cpNum});
    }
    render(){
        const {tNum, cpNum, problem, answer } = this.props;
        const { onChange } = this;
        const { WritingActions } = this.props;
        const data = answer.toJS();

        if(data[cpNum] === undefined)
            WritingActions.writingInitialAnswer({cpNum});

        return(
            <QWriting
                question={problem}
                onChangehandle={onChange}
                answer={answer}
            />
        )
    }
}

export default connect(
    (state) => ({
        problem : state.writing.get('problem'),
        tNum : state.writing.get('tNum'),
        cpNum : state.writing.get('cpNum'),
        answer : state.writing.get('answer')
    }),
    (dispatch) => ({
        WritingActions : bindActionCreators(writingActions, dispatch)
    })
)(withRouter(WritingContainer));