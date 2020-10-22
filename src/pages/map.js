import React from "react"
import Sidebar from "../components/sidebar"
import Layout from "../components/layout/layout"
import SEO from "../components/seo";

const LeafletMap = React.lazy(() => import('../components/leaflet-map'));

const Map = () => {
    const isSSR = typeof window === "undefined";

    return (
        <Layout>
            <SEO title="Map" />
            <Sidebar />
            { !isSSR && (
                <React.Suspense fallback={<div />}>
                    <LeafletMap />
                </React.Suspense>
            )}
        </Layout>
    );
};

export default Map;
