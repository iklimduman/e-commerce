import React from "react";
import "./Topbar.css";

import logo from "../../Images/lotus-logo.jpeg" ;
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

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
                    <NotificationsNoneIcon></NotificationsNoneIcon>
                </div>
            </div>
        </div>

    )
}

export default Topbar;