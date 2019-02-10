import React, { Component } from 'react'
import Card from './Card.jsx'

export default class Slider extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            list: [...this.props.list],
            focus: 0
        }
    }
    handleClick(n) {
        this.setState({focus: n})
    }
    render() {
        const {focus, list} = this.state
      
        return (
            <div>
                <div className={`slider`}>
                    <div className={`slider-wrapper active-slide-${focus}`}  style={{
                        'transform': `translateX(-${focus*(100/list.length)}%)`
                    }}>
                        {
                            list.map((property, i) => { 
                                return <Card 
                                    key={property.key} 
                                    info={property}
                                    initialPosition={i}
                                    handleClick={this.handleClick.bind(this)}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}