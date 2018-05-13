import React, { Component } from 'react';
import ReactHowler from 'react-howler';
import { Button } from 'components';

class Listening extends Component{
    render(){
        const { url, onEndhanle } = this.props;
        return(
            <div>
                <ReactHowler
                    src={url}
                    playing={true}
                    preload={true}
                    onEnd={onEndhanle}
                />
                listening
            </div>
        )
    }
}

export default Listening;