import React from 'react';

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            timer : null,
            total : this.props.total,
            start : this.props.chapter, //localStorage.getItem('startTime'),
            record : this.props.record,
            // startRecord : this.props.startRecord,
            // stopRecord : this.props.startRecord,
            elapsed : 0,
            hour : 0,
            minute : 0, 
            seconds : 0,
        };
        console.log("in SpeakingTimer, total = " + this.state.total);
        console.log("in SpeakingTimer, start = " + this.state.start);
        console.log("in SpeakingTimer, record = " + this.state.record);
        console.log(this.props.stopRecord);
        console.log(this.props.stopRecord);
    }
    getInitialState(){
        return { elapsed: 0 };
    }

    componentDidMount(){
        this.setState({timer : setInterval(() => {
            this.setState({
                elapsed: Math.round(this.state.total - (new Date().getTime() - this.state.start) / 1000),
                hour: Math.floor(this.state.elapsed / 3600),
                minute: Math.floor(this.state.elapsed / 60 % 60),
                seconds : Math.floor(this.state.elapsed % 60)
            });
            if(this.state.elapsed === this.state.record - 1){
                this.props.startRecord();
            }
            if(this.state.elapsed < 0){
                this.props.stopRecord();
                clearInterval(this.state.timer);
            } 
                
        }, 1000)});
        // this.state.timer = setInterval(() => {
        //     this.setState({
        //         elapsed: Math.round(this.state.total - (new Date().getTime() - this.state.start) / 1000),
        //         hour: Math.floor(this.state.elapsed / 3600),
        //         minute: Math.floor(this.state.elapsed / 60 % 60),
        //         seconds : Math.floor(this.state.elapsed % 60)
        //     });
        //     if(this.state.elapsed === this.state.record - 1){
        //         this.props.startRecord();
        //     }
        //     if(this.state.elapsed < 0){
        //         this.props.stopRecord();
        //         clearInterval(this.state.timer);
        //     } 
                
        // }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
    
    render() {
        //var elapsed = Math.round(this.state.elapsed / 100);
        return <b>remain time = {this.state.hour} : {this.state.minute} : {this.state.seconds}</b>;
    }
};


export default Timer;