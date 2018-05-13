import React from 'react';

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            timer : null,
            total : this.props.total,
            start : this.props.chapter, //localStorage.getItem('startTime'),
            elapsed : 0,
            hour : 0,
            minute : 0, 
            seconds : 0,
        };
        window.console.log("in Timer, total = " + this.state.total);
        window.console.log("in Timer, start = " + this.state.start);
    }
    getInitialState(){
        return { elapsed: 0 };
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({
                elapsed: Math.round(this.state.total - (new Date().getTime() - this.state.start) / 1000),
                hour: Math.floor(this.state.elapsed / 3600),
                minute: Math.floor(this.state.elapsed / 60 % 60),
                seconds : Math.floor(this.state.elapsed % 60)
            });
                if(this.state.elapsed <= 0){
                    clearInterval(this.timer);
                    let url = document.location.href.split("/");
                    switch(url[3]){
                        case "reading": document.location.href = url[0] +"/"+ url[1] +"/"+ url[2] + "/listening"; break;
                        case "writing": document.location.href = url[0] +"/"+ url[1] +"/"+ url[2] + "/finish"; break;
                        case "listening": document.location.href = url[0] +"/"+ url[1] +"/"+ url[2] + "/skip"; break;
                        case "skip": document.location.href = url[0] +"/"+ url[1] +"/"+ url[2] + "/speaking"; break;
                        case "speaking": document.location.href = url[0] +"/"+ url[1] +"/"+ url[2] + "/writing"; break;
                        default : break;
                    }
                } 
                
        }, 1000);
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