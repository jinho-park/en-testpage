import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as listeningActions from 'store/modules/listening';
import { QReading, Listening } from 'components';

class ListeningContainer extends Component{
    componentWillMount(){
        const { ListeningActions } = this.props;
        const { lNum } = this.props;
        ListeningActions.listeningGetQuestion({lNum});
    }

    onChange = (e) => {
        const { ListeningActions } = this.props;
        const { cNum, lNum } = this.props;
        const number = cNum + lNum;

        ListeningActions.listeningChooseAnswer({e, number});
    }

    onEndhandle = () => {
        const { ListeningActions } = this.props;

        console.log('audio end');
        ListeningActions.listeningPaySet();
    }

    render(){
        const { onChange, onEndhandle } = this;
        const { listen, lNum, cNum, chooseAnswer, problem, listening } = this.props;
        const { ListeningActions } = this.props;
        const data = chooseAnswer.toJS();
        const number = lNum + cNum;
        const thisUrl = localStorage.getItem('thisUrl');
        const requestUrl = thisUrl+"api/v1.0/listening/get/listening/"+listening[lNum];

        console.log(listen);
        console.log(problem);

        if(data[number] === undefined)
            ListeningActions.listeningInitialAnswer({number});

        return(
            listen ? <Listening url={requestUrl} onEndhandle={onEndhandle}/>: <QReading question={problem[number]} onChangehandle={onChange} answer={data[number]}/>
        )
    }
}

export default connect(
    (state) => ({
        problem : state.listening.get('problem'),
        lNum : state.listening.get('lNum'),
        cNum : state.listening.get('cNum'),
        chooseAnswer : state.listening.get('chooseAnswer'),
        listen : state.listening.get('listen'),
        listening : state.listening.get('listening')
    }),
    (dispatch) => ({
        ListeningActions : bindActionCreators(listeningActions, dispatch)
    })
)(withRouter(ListeningContainer));