<<<<<<< HEAD
import React, { Component } from 'react'
import Slider from './components/Slider.jsx'
import data from './data';
import './scss/general.css';
=======
import React, { Component } from 'react';
import ImageSlider from './ImageSlider';
import './css/desktop.css';
import data from './data';
>>>>>>> 5d7641054a72c34e1734d55b61f14ba3c2fe740a

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <Slider 
          list={data.cards}
        />
      </div>  
=======
      <div className="app">
        <ImageSlider 
          data={data}>
        </ImageSlider>
      </div>
>>>>>>> 5d7641054a72c34e1734d55b61f14ba3c2fe740a
    );
  }
}

export default App;
