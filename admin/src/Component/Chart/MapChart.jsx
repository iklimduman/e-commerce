import React, { useState } from "react";

import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    Annotation,
    ZoomableGroup
} from "react-simple-maps";

import ReactTooltip from "react-tooltip";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


// North and East are : + South and West are - values on coordinates !

const markers = [
    {
        markerOffset: -15,
        name: "Washington, DC",
        coordinates: [-77.007507, 38.900497]
    },
    {
        markerOffset: -15,
        name: "New York, NY",
        coordinates: [-73.935242, 40.730610]
    },
    {
        markerOffset: -15,
        name: "Chicago, IL",
        coordinates: [-87.623177, 41.881832]
    },
    {
        markerOffset: -15,
        name: "Austin, TX",
        coordinates: [-100.000000, 31.000000]
    },
    {
        markerOffset: -15,
        name: "Phoenix, AZ",
        coordinates: [-112.074036, 33.448376]
    },
]

//Geography components returns countries

export const MapChart = () => {
    return (
        <div style={{ width: "50%", borderStyle: "double" }}>
            <ComposableMap projection="geoAlbers">
                <Geographies geography={geoUrl}>
                    {({ geographies }) => geographies.filter(country => country.properties.NAME === "United States of America")
                        .map((geo) => (
                            <Geography key={geo.rmsKey}
                                geography={geo} fill="#EADEF0" stroke="black" onMouseEnter={() => { console.log(geo) }} />
                        ))}
                </Geographies>
                {markers.map(({ markerOffset, name, coordinates }) => (
                    <Marker key={name} coordinates={coordinates}>
                        <g
                            fill="none"
                            stroke="#FF5533"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            transform="translate(-12, -24)"
                        >
                            <circle cx="12" cy="10" r="3" />
                            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                        </g>
                        <text
                            textAnchor="middle"
                            y={markerOffset}
                            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                        >
                            {name}
                        </text>
                    </Marker>
                ))}

            </ComposableMap>
        </div>

    )
}
