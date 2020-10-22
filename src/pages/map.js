import React from "react"

import Leaflet from "leaflet"
import { Map, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"

import Sidebar from "../components/sidebar"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

class LeafletMap extends React.Component {
    state = {
        latitude: 0,
        longitude: 0,
        zoom: 6,
    }

    render() {
        const corner_1 = Leaflet.latLng(90, 90)
        const corner_2 = Leaflet.latLng(-66.5, -180)

        const bounds = Leaflet.latLngBounds(corner_1, corner_2)

        return (
            <Layout>
                <SEO title="Map" />
                <Sidebar />
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
                        url="/maps/genshin-impact-teyvat/{z}/{x}/{y}.png"
                        minZoom={3}
                        maxZoom={5}
                        noWrap={true}
                    />
                </Map>
            </Layout>
        )
    }
}

export default LeafletMap
