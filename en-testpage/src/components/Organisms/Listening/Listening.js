import React, { Component } from 'react';
import ReactHowler from 'react-howler';

class Listening extends Component{
    render(){
        return(
            <ReactHowler
                src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
                playing={true}
            />
        )
    }
}

export default Listening;