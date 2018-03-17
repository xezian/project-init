import Map from './Map.js'
import {
	default as React,
	Component,
} from "react"
const { compose, withProps, withHandlers } = require("recompose")
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Infowindow,
	Marker,
} from "react-google-maps"

let RochMap = GoogleMap
console.log(RochMap)

import SampleMarkers from "SampleMarkers.js"

export default Class MainMap extends Component {
	constructor(props) {
		super(props)
		this.state = {
			marker: []
		}
		this.handleMapClick = this.handleMapClick.bind(this)
	}	

	componentDidMount() {
		console.log("componentDidMount")
	}
	handleMapClick() {
		console.log("mapClicked")
	}
	handleRightClick() {
		console.log("rightClicked")
	}
	handleMarkerRightClick() {
		console.log("markerRightClicked")
	}
	render() {
		return (
		<div style= {{height: "100%"}}
			<Map
			  containerElement={
			    <div style = {{ height: "100%" }} />
			  }
			  mapElement={
			    <div style = {{ height: "100%" }} />
			  }
			  markers={this.state.markers}
			  onMapLoad={this.handleMapLoad}
			  onMapClick={this.handleMapClick}
			  onRightClick={this.handleRightClick}
			  onMarkerRightClick={this.handleMarkerRightClick}
			/>
		</div>
		)

	}
}
