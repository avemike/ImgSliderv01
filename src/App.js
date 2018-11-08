import React, { Component } from 'react';
import ImageSlider from './ImageSlider';
import './css/desktop.css';
import data from './data';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ImageSlider 
          data={data}>
        </ImageSlider>
      </div>
    );
  }
}

export default App;
