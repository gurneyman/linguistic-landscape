import React, { Component } from 'react';

import LocationPicMarker from "./LocationPicMarker";
class Location {
  constructor(lat, lng) {
    this.lat = lat;
    this.lng = lng;
  }
}

class MarkerList extends Component {
  state = {
    locationPics: [
      {
        id: 1,
        title: "Kung Fu Tea",
        imgurl: "https://farm5.staticflickr.com/4450/37396723076_8df528500a_z_d.jpg",
        address: "Kung Fu Tea, 234 Canal St, New York, NY 10013",
        location: new Location(40.7176948, -74.0000486),
      },
      {
        id: 2,
        title: "Eats Raw Fish Graffiti",
        imgurl: "https://farm5.staticflickr.com/4383/37396722646_f82c48e322_z_d.jpg",
        address: "Chinatown, Centre and Hester St Manhattan",
        location: new Location(40.7187011, -73.9994086),
      },
      {
        id: 3,
        title: "Citibank on Mott Street",
        imgurl: "https://farm5.staticflickr.com/4407/37396722996_e18ed2225d_z_d.jpg",
        address: "Citibank, 2 Mott St, New York, NY 10013",
        location: new Location(40.7137812, -73.9985086),
      },
      {
        id: 4,
        title: "Kēkí Modern Cakes",
        imgurl: "https://farm5.staticflickr.com/4418/23592508978_455f093415_z_d.jpg",
        address: "Kēkí Modern Cakes, 79 Mott St",
        location: new Location(40.716495, -73.9979633),
      },
      {
        id: 5,
        title: "Mulberry and Canal Street Signs",
        imgurl: "https://farm5.staticflickr.com/4502/37396721486_85aa02d36e_z_d.jpg",
        address: "Chinatown, Mulberry and Canal, Manhattan",
        location: new Location(40.7171116, -73.9985879),
      },
    ]
  };

  render() {
    return (
      <div>
        {this.state.locationPics.map((locationPic) => {
          return <LocationPicMarker key={ locationPic.id } locationPic={ locationPic } />
        })}
      </div>
    );
  }
}

export default MarkerList;

