import React from 'react';
import Leaflet from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';
import { withPrefix } from "gatsby"
import "leaflet/dist/leaflet.css"

const LeafletMap = () => {
    const bounds = Leaflet.latLngBounds(
        Leaflet.latLng(90, 90),
        Leaflet.latLng(-66.5, -180)
    );

    return (
        <Map
            zoom={0}
            center={bounds.getCenter()}
            bounds={bounds}
            maxBounds={bounds}
            maxBoundsViscosity={1.0}
            attributionControl={false}
            style={{
                height: "100%",
            }}
        >
            <TileLayer
                url={withPrefix("/maps/genshin-impact-teyvat/{z}/{x}/{y}.png")}
                minZoom={3}
                maxZoom={5}
                noWrap={true}
            />
        </Map>
    );
}

export default LeafletMap;
