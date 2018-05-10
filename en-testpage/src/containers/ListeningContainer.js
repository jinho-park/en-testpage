import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as listeningActions from 'store/modules/listening';
import { QReading, Listening } from 'components';

class ListeningContainer extends Component{
    componentWillMount(){
        const { ListeningActions } = this.props;
        ListeningActions.listeningGetQuestion();
    }

    onChange = (e) => {
        const { ListeningActions } = this.props;
        const { cNum, lNum } = this.props;
        const number = cNum + lNum;

        ListeningActions.listeningChooseAnswer({e, number});
    }

    render(){
        const { onChange } = this;
        const { listen, lNum, cNum, chooseAnswer, problem } = this.props;
        const { ListeningActions } = this.props;
        const data = chooseAnswer.toJS();
        const number = lNum + cNum;

        if(data[number] === undefined)
            ListeningActions.listeningInitialAnswer({number});

        return(

            {listen} ? 
                <input/>: 
                <QReading
                    question={problem[number]}
                    onChangehandle={onChange}
                    answer={data[number]}
                />
        )
    }
}

export default connect(
    (state) => ({
        problem : state.listening.get('problem'),
        lNum : state.listening.get('lNum'),
        cNum : state.listening.get('cNum'),
        chooseAnswer : state.listening.get('chooseAnswer'),
        listen : state.listening.get('listen')
    }),
    (dispatch) => ({
        ListeningActions : bindActionCreators(listeningActions, dispatch)
    })
)(withRouter(ListeningContainer));