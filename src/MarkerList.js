import React, { Component } from 'react';

import LocationPicMarker from "./LocationPicMarker";

class MarkerList extends Component {

  render() {
    return (
      <div>
        {this.props.locationPics.map((locationPic) => {
          return( 
            <LocationPicMarker 
              key={ locationPic.id } 
              locationPic={ locationPic }
              toggleOpenAt={ () => this.props.toggleOpenAt(locationPic.id) } /> 
          );
        })}
      </div>
    );
  }
}

export default MarkerList;

