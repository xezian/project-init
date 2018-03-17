import React , { Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


class Map extends Component {


	render() {
		const markers = this.props.markers || []
		return (
		<GoogleMap
			ref= {this.mapLoaded.bind(this)}
			defaultZoom={12}
			defaultCenter={ this.props.center }
			onRightClick={this.rochRightClick}>
			{markers.map((marker, index) => (
	<Marker {...marker} />
)
)}
		</GoogleMap>
	)
}


}


export default Map;
