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

    onEndhandle = () => {
        const { ListeningActions } = this.props;

        ListeningActions.listeningPaySet();
    }

    render(){
        const { onChange, onEndhandle } = this;
        const { listen, lNum, cNum, chooseAnswer, problem } = this.props;
        const { ListeningActions } = this.props;
        const data = chooseAnswer.toJS();
        const number = lNum + cNum;
        const url = document.location.href.split("/");
        //const requestUrl = url[0] +"/"+ url[1]+"/"+url[2]+"/api/v1.0/listeing/get/listening/"+lNum;
        const requestUrl = 'localhost:4000/api/v1.0/listening/get/listening/1';

        if(data[number] === undefined)
            ListeningActions.listeningInitialAnswer({number});

        console.log(requestUrl);

        return(

            {listen} ? 
                <Listening
                    url={requestUrl}
                    onEndhandle={onEndhandle}
                />: 
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