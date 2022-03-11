import React from "react";
import "./Sidebar.css";

import { Home, Insights, TrendingUp } from '@mui/icons-material';

const iconStyle = {
    marginRight: '15px',
    width: '35px',
    height: '35px'
}

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-wrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Home style={iconStyle} /> Home
                        </li>
                        <li className="sidebarListItem">
                            <Insights style={iconStyle} /> Analiytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp style={iconStyle} /> Home
                        </li>
                    </ul>

                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Home style={iconStyle} /> Home
                        </li>
                        <li className="sidebarListItem">
                            <Insights style={iconStyle} /> Analiytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp style={iconStyle} /> Home
                        </li>
                    </ul>

                    <h3 className="sidebarTitle">User Data</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Home style={iconStyle} /> Home
                        </li>
                        <li className="sidebarListItem">
                            <Insights style={iconStyle} /> Analiytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp style={iconStyle} /> Home
                        </li>
                    </ul>

                </div>
            </div>
        </div>

    )
}

export default Sidebar;