import React, { Component } from 'react'

export default class Slider extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            initialPosition: this.props.initialPosition
        }
    }
    render() {
        return (
            <div className={`card card-${this.state.initialPosition}`}
                key={this.props.key}
                onClick={() => this.props.handleClick(this.state.initialPosition)}
            >
                <img 
                    src={this.props.info.img_src} 
                    alt="" 
                />
            </div>
            
        )
    }
}