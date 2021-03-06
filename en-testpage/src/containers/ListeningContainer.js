import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as listeningActions from 'store/modules/listening';
import { QListening, Listening } from 'components';

class ListeningContainer extends Component{
    onChange = (e) => {
        const { ListeningActions } = this.props;
        const { cNum } = this.props;

        ListeningActions.listeningChooseAnswer({e, cNum});
    }

    onEndhandle = () => {
        const { ListeningActions } = this.props;

        ListeningActions.listeningPaySet();
    }

    render(){
        const { onChange, onEndhandle } = this;
        const { listen, lNum, cNum, chooseAnswer, problem, listening } = this.props;
        const data = chooseAnswer.toJS();
        const number = cNum;
        const thisUrl = localStorage.getItem('thisUrl');
        const requestUrl = thisUrl+"api/v1.0/listening/get/listening/"+listening[lNum];
        const imageUrl = thisUrl+"api/v1.0/listening/get/image/"+(lNum*1+1)+'.jpg';

        return(
            listen ? <Listening url={requestUrl} onEndhandle={onEndhandle} image={imageUrl}/>: <QListening question={problem[number]} onChangehandle={onChange} answer={data[number]}/>
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