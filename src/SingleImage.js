import React, { Component } from 'react';

class SingleImage extends Component {
    render() {
        const {picture, index} = this.props.property;
        return (
            <div className={`single-image-container image-container-${index}`}>
                <img src={picture} />
            </div>
        );
    }
}
export default SingleImage;