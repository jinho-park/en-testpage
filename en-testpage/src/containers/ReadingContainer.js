import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as readingActions from 'store/modules/reading';
import { QReading } from 'components';

class ReadingContainer extends Component{
    componentWillMount(){
        const { ReadingActions } = this.props;
        ReadingActions.readingGetQuestion();
    }

    componentDidMount(){
        const { ReadingActions } = this.props;
        const { tNum } = this.props;

        for(var i=0;i<tNum;i++){
            console.log('asdf')
            ReadingActions.readingInitialAnswer(i);
        }
    }

    onChange = (e) => {
        const { ReadingActions } = this.props;
        const { cpNum, chooseAnswer } = this.props;

        ReadingActions.readingChooseAnswer({e, cpNum});
    }

    render(){
        const { onChange } = this;
        const { tNum, cpNum, problem, chooseAnswer } = this.props;
        const data = problem;

        return(
            <QReading
                question={problem[cpNum]}
                onChangehandle={onChange}
            />
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