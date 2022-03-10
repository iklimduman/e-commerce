import React from "react";
import "./Topbar.css";

import logo from "../../Images/lotus-logo.jpeg" ;

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbar-wrapper">
                <div className="top-left">
                    <div className="logo">
                        <img class="image" src={logo} alt="Alternative Text"/>
                    </div>
                </div>
                <div className="top-right">
                    right
                </div>
            </div>
        </div>

    )
}

export default Topbar;