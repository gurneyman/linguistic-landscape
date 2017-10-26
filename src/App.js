import React, { Component } from 'react';

import PicMap from './PicMap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Manhattan Chinatown Linguistic Landscape</h1>
        </header>
        <PicMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnOKq8JmeF7zmivYut8l0yA8UIanqIbcg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default App;
