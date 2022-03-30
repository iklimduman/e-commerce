import React, { useState } from "react";

import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    Annotation,
} from "react-simple-maps";

import ReactTooltip from "react-tooltip";

import PushPinIcon from '@mui/icons-material/PushPin';

const geoUrl =
    "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";


// North and East are : + South and West are - values on coordinates !

const markers = [
    
    {
        markerOffset: -30,
        name: "New York, NY",
        coordinates: [-73.935242, 40.730610]
    },
    {
        markerOffset: -30,
        name: "Chicago, IL",
        coordinates: [-87.623177, 41.881832]
    },
    {
        markerOffset: -30,
        name: "Austin, TX",
        coordinates: [-100.000000, 31.000000]
    },
    {
        markerOffset: -30,
        name: "Phoenix, AZ",
        coordinates: [-112.074036, 33.448376]
    },
    {
        markerOffset: -30,
        name: "Los Angeles, CA",
        coordinates: [-118.243683, 34.052235]
    },
    {
        markerOffset: -30,
        name: "Wichita, KS",
        coordinates: [-97.314835, 37.6871761]
    },
]

//Geography components returns countries

export const MapChart = () => {
    return (
        <div style={{ width: "70%" , height : "70%"}}>
            <ComposableMap projection="geoAlbers">
                <Geographies geography={geoUrl}>
                    {({ geographies }) => geographies
                        .map((geo) => (
                            <Geography key={geo.rmsKey}
                                geography={geo} fill="rgba(233,235,247)" stroke="rgba(182,187,219)" />
                        ))}
                </Geographies>
                {markers.map(({ markerOffset, name, coordinates }) => (
                    <Marker key={name} coordinates={coordinates}>
                        <g
                            fill="none"
                            stroke="red"
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
                            style={{ fontFamily: "'Fira Sans', sans-serif", fill: "#450068", fontSize:"18px" }}
                        >
                            {name}
                        </text>
                    </Marker>
                ))}

            </ComposableMap>
        </div>

    )
}
