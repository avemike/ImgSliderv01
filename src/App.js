import React, { Component } from 'react'
import Slider from './components/Slider.jsx'
import data from './data';
import './scss/general.css';

class App extends Component {
  render() {
    return (
      <div className="container-mine">
        <Slider 
          list={data.cards}
        />
      </div>
    );
  }
}

export default App;
