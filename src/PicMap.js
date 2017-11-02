import React from 'react';
import { compose } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap
} from "react-google-maps";

import MarkerList from "./MarkerList";

const PicMap = compose(
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 40.715911, lng: -73.998404 }}
  >
    <MarkerList 
      locationPics={ props.locationPics }
      toggleOpenAt={ props.toggleOpenAt } />
  </GoogleMap>
);

export default PicMap;

