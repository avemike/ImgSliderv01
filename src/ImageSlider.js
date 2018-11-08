import React, { Component } from 'react';
import SingleImage from './SingleImage';

class ImageSlider extends Component {
    constructor(props) {
        super(props);
        const {properties} = props.data;
        this.state = { 
            properties,
            property: properties[0] 
        }
    }
    changeProperty = (shift) => {
        const newIndex = this.state.property.index + shift;
        this.setState({
            property: this.state.properties[newIndex]
        })
    }
    render() {
        const {properties, property} = this.state;
        return (
            <div className="image-slider">
                <button 
                    onClick={() => this.changeProperty(-1)}
                    disabled = {property.index === 0}
                >
                    Prev
                </button>
                <button
                    onClick={() => this.changeProperty(1)}
                    disabled={
                        property.index === properties.length-1
                    }
                >
                    Next
                </button>
                <div className={`image-slider-wrapper active-slide-${property.index}`} style ={{
                    'transform': `translateX(-${property.index*(100/properties.length)}%)`
                }}>
                    {
                        properties.map( property => {
                            return <SingleImage 
                                        property = {property}
                                        key = {properties._id}    
                                    />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ImageSlider;