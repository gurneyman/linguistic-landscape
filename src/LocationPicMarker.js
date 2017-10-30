import React, { Component } from 'react';
import {
  Marker
} from "react-google-maps";

class LocationPicMarker extends Component {
  render() {
    const locationPic = this.props.locationPic
    return (
      <div>
        <Marker
            position={ locationPic.location }
            onClick={ () => this.props.toggleOpenAt() }>
        </Marker>
      </div>
    );
  }
}

export default LocationPicMarker;

