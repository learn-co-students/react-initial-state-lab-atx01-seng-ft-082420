import React from 'react';

export default class imageSlider extends React.Component {
    
    constructor() {
        super()

        this.state = {
            currentSlideIndex: 0
        }
    }

    render () {
        return (
            <p>I am on slide {this.state.currentSlideIndex}</p>
        )
    }
}