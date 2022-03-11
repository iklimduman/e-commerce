import React from "react";
import "./Topbar.css";

import logo from "../../Images/lotus-logo.jpeg";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language'; 
import SettingsIcon from '@mui/icons-material/Settings';

const iconStyle = {
    width: '35px',
    height: '35px'
}

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbar-wrapper">
                <div className="top-left">
                    <div className="logo">
                        <img class="image" src={logo} alt="Alternative Text" />
                    </div>
                </div>
                <div className="top-right">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon htmlColor="#5A4AE2" style={iconStyle} />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageIcon htmlColor="#5A4AE2" style={iconStyle} />
                        
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon htmlColor="#5A4AE2" style={iconStyle} />
                    </div>
                    <div className="avatar" />
                </div>
            </div>
        </div>

    )
}

export default Topbar;