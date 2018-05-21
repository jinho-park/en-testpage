import React, { Component } from 'react';
import ReactHowler from 'react-howler';
import { Button } from 'components';

class Listening extends Component{
    render(){
        const { url, onEndhanle, image } = this.props;
        return(
            <div>
                <ReactHowler
                    src={url}
                    playing={true}
                    preload={true}
                    onEnd={onEndhanle}
                />
                listening
                <img
                    src={image}
                />
            </div>
        )
    }
}

export default Listening;