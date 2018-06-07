import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class AccountMap extends React.Component {
  state = {
    lat: 51.505,
    lng: -0.09,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
        <Map center={position} zoom={18}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
    )
  }
}

export default AccountMap