import React from 'react';

export default class Bomb extends React.Component {

    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render () {
    
        const notice = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
            
        return (
            <div>{notice}</div>
        )
    }
}
