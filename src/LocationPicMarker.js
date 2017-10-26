import React, { Component } from 'react';
import {
  Marker,
  InfoWindow,
} from "react-google-maps";

class LocationPicMarker extends Component {
  state = {
    isOpen: false,
  };

  toggleOpen = () => {
      this.setState({
          isOpen: !this.state.isOpen,
      })
  }

  render() {
    const locationPic = this.props.locationPic
    return (
      <div>
        <Marker
            position={ locationPic.location }
            onClick={ this.toggleOpen }>
            {this.state.isOpen &&
                <InfoWindow
                    onCloseClick={ this.toggleOpen }>
                    <div>
                        <h2>{ locationPic.title }</h2>
                        <img 
                            src={ locationPic.imgurl }
                            alt="rawr" />
                    </div>
                </InfoWindow>
            }
        </Marker>
      </div>
    );
  }
}

export default LocationPicMarker;

