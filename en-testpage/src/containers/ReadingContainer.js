import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as readingActions from 'store/modules/reading';
import { QReading } from 'components';

class ReadingContainer extends Component{
    ComponentWillMount(){
        const { ReadingActions } = this;
        ReadingActions.readingGetQuestion();
    }

    onChange = (e) => {
        console.log('change');
    }

    render(){
        const { onChange } = this;
        const { tNum, cpNum, problem, chooseAnswer } = this.props;

        return(
            <QReading
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