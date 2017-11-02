import React, { Component } from 'react';
import {
  Marker
} from "react-google-maps";

class LocationPicMarker extends Component {
  render() {
    const locationPic = this.props.locationPic
    let image = "";
    if(locationPic.isActive) {
      image = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
    } else {
      image = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
    }

    return (
      <div>
        <Marker
            position={ locationPic.location }
            onClick={ () => this.props.toggleOpenAt() }
            icon={{
              url: image,
            }}>
        </Marker>
      </div>
    );
  }
}

export default LocationPicMarker;

