import React, { Component } from 'react';
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";

class MapCom extends Component {

    render(){
      const markers = this.props.markers || []

      return(
        <GoogleMap
          defaultZoom={3}
          defaultCenter={{lat: 53.3498, lng: 6.2603 }}>
            {markers.map((marker,index) => (
              <Marker {...marker}/>
            ))}
            <Marker
            position={{ lat: this.props.lat, lng: this.props.long }}
            />

        </GoogleMap>
      )
    }
}

export default withGoogleMap(MapCom)
