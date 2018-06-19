import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class AccountMap extends React.Component {
  state = {
    lat: this.props.lat,
    lng: this.props.lng
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <div id='map-container'>
        <Map center={position} zoom={17}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}

export default AccountMap