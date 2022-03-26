import { height } from "@mui/system";
import React, { useState } from "react";

import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    Annotation,
} from "react-simple-maps";

import ReactTooltip from "react-tooltip";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const countryArray = ["Germany", "Argentina", "United Kingdom", "South Africa" , 
"New Zealand" , "Norway" , "Mexico", "Canada", "Turkey", "Japan", "India", "Netherlands", "Japan", "Kenya", "Thailand"]

//Geography components returns countries

export const WorldMap = () => {
    return (
        <div style={{ width: "80%", height : "80%"}}>
            <ComposableMap>
                <Geographies geography={geoUrl}>
                    {({ geographies }) => geographies.filter((country) => country.properties.CONTINENT !== "Antarctica")
                        .map((geo) => (
                            <Geography key={geo.rmsKey}
                                geography={geo} fill="#DBDBDB" stroke="#AEAEAE" onMouseEnter={() => { console.log(geo) }} />
                        ))}
                </Geographies>
                <Geographies geography={geoUrl}>
                    {({ geographies }) => geographies.filter((country) => countryArray.includes(country.properties.NAME))
                        .map((geo) => (
                            <Geography key={geo.rmsKey}
                                geography={geo} fill="#3D017A" stroke="#AEAEAE" onMouseEnter={() => { console.log(geo) }} />
                        ))}
                </Geographies>

            </ComposableMap>
        </div>

    )
}
