import React, { Component } from 'react';

import PicMap from './PicMap';
import PicSlider from './PicSlider';
import logo from './logo.svg';
import './App.css';

class Location {
  constructor(lat, lng) {
    this.lat = lat;
    this.lng = lng;
  }
}

class App extends Component {
  state = {
    locationPics: [
      {
        id: 1,
        title: "Kung Fu Tea",
        imgurl: "https://farm5.staticflickr.com/4450/37396723076_8df528500a_z_d.jpg",
        address: "Kung Fu Tea, 234 Canal St, New York, NY 10013",
        location: new Location(40.7176948, -74.0000486),
        isActive: true,
        description: "Kung Fu tea uses more \"standard\" English for the most part, with some decorative Chinese characters",
      },
      {
        id: 2,
        title: "Eats Raw Fish Graffiti",
        imgurl: "https://farm5.staticflickr.com/4383/37396722646_f82c48e322_z_d.jpg",
        address: "Chinatown, Centre and Hester St Manhattan",
        location: new Location(40.7187011, -73.9994086),
        isActive: false,
        description: "This seems like the Chinese and English form one sentence",
      },
      {
        id: 3,
        title: "Citibank on Mott Street",
        imgurl: "https://farm5.staticflickr.com/4407/37396722996_e18ed2225d_z_d.jpg",
        address: "Citibank, 2 Mott St, New York, NY 10013",
        location: new Location(40.7137812, -73.9985086),
        isActive: false,
        description: "Citibank signage - Chinese characters are translated by Google to Citibank and a Google search will lead to Citibank Taiwan's website",
      },
      {
        id: 4,
        title: "Kēkí Modern Cakes",
        imgurl: "https://farm5.staticflickr.com/4418/23592508978_455f093415_z_d.jpg",
        address: "Kēkí Modern Cakes, 79 Mott St",
        location: new Location(40.716495, -73.9979633),
        isActive: false,
        description: "kēkí is the transliterated form of the symbols that mean \"cake\" in Japanese",
      },
      {
        id: 5,
        title: "Mulberry and Canal Street Signs",
        imgurl: "https://farm5.staticflickr.com/4502/37396721486_85aa02d36e_z_d.jpg",
        address: "Chinatown, Mulberry and Canal, Manhattan",
        location: new Location(40.7171116, -73.9985879),
        isActive: false,
        description: "Example of top-down signage",
      },
      {
        id: 6,
        title: "Why Not Treatment",
        imgurl: "https://farm5.staticflickr.com/4363/23592511218_b48b67d893_z_d.jpg",
        address: "8 Elizabeth St, New York, NY 10013, USA",
        location: new Location(40.7156109, -73.9973547),
        isActive: false,
        description: "Uses somewhat \"non-standard\" English enough functionally to get across the services it offers",
      },
      {
        id: 7,
        title: "Tallmax Advertisement",
        imgurl: "https://farm5.staticflickr.com/4378/23592510848_2d7efbb1d0_z_d.jpg",
        address: "110 Walker St, New York, NY 10013, USA",
        location: new Location(40.7176325, -74.0000649),
        isActive: false,
        description: "An ad for TallMax which contains marketing copy in Chinese, but metadata (Name, and other information of note to regulatory audiences) in English",
      },
      {
        id: 8,
        title: "No Hate Sticker",
        imgurl: "https://farm5.staticflickr.com/4489/23592508648_e427a56e1e_z_d.jpg",
        address: "112 Walker St, New York, NY 10013, USA",
        location: new Location(40.71755479999999, -73.99999849999999),
        isActive: false,
        description: "Notice combination of Chinese and English delivering separate functional messages",
      },
      {
        id: 9,
        title: "Beautiful Memory Desserts",
        imgurl: "https://farm5.staticflickr.com/4484/37396909826_bb177a5541_z_d.jpg",
        address: "69 Bayard St, New York, NY 10013, USA",
        location: new Location(40.71544069999999, -73.9983151),
        isActive: false,
        description: "A dessert spot with Chinese characters that translate to \"Dessert Drinks\" with \"Beautiful Memory Desserts\" below it",
      },
      {
        id: 10,
        title: "Stock Boy Hiring Sign",
        imgurl: "https://farm5.staticflickr.com/4505/37396954576_24fdc811fe_z_d.jpg",
        address: "216 Walker St, New York, NY 10013, USA",
        location: new Location(40.7173419, -73.99950629999999),
        isActive: false,
        description: "This sign targets those comfortable speaking Chinese or English as their primary language Google translate translated as \"Please abandon people 4, neglected members, a litte pod cultivation left\"",
      },
    ]
  };

  toggleOpenAt = (idToOpen) => {
    this.setState({
      locationPics: this.state.locationPics.map((locationPic) => {
        if(idToOpen === locationPic.id) {
          locationPic.isActive = true;
        } else {
          locationPic.isActive = false;
        }
        return locationPic;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chinatown for Everyone</h1>
        </header>
        <div className="grid">
          <div className="pic-map">
            <PicMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnOKq8JmeF7zmivYut8l0yA8UIanqIbcg&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} /> }
              locationPics= { this.state.locationPics }
              toggleOpenAt={ this.toggleOpenAt }
            />
          </div>
          <div className="pic-slider">
            <PicSlider 
              locationPics= { this.state.locationPics }
              toggleOpenAt={ this.toggleOpenAt } />
          </div>
          <div className="pic-meta">
            {this.state.locationPics.filter((locationPic) => {
              return locationPic.isActive;
            }).map((locationPic) => {
              return(
                <div>
                  <h2>{locationPic.title}</h2>
                  <p>{locationPic.address}</p>
                </div>
              );
            })}
          </div>
          <div className="pic-findings">
            <h2>About This Photo</h2>
            {this.state.locationPics.filter((locationPic) => {
              return locationPic.isActive;
            }).map((locationPic) => {
              return(
                <div>
                  <p>{locationPic.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ll-methodology">
          <h2>Methodology and Findings</h2>
          <p>
            Somehow, Chinatown manages to cater to clueless tourists like myself while exhibiting a strong ethnolinguistic vitality, and that is what I kept in mind as I prepared my linguistic landscape. I focused mainly on bottom-up signs as these contained the most linguistic diversity, but included one top-down which shows how extensively Chinese is used in the neighborhood.
          </p>
          <p>
            At the same time, there are many storefronts in Chinatown that are exclusively written in Chinese or another language. This feels symbolic; like the owners are "planting a flag" on the neighborhood.
          </p>
          <p>
            As I took pictures and analyzed them I tried to keep an eye out for images that illustrated this and/or simply looked interesting.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
