import React from "react";
import "./Sidebar.css";

import { Home, Insights, TrendingUp } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ReceiptIcon from '@mui/icons-material/Receipt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MessageIcon from '@mui/icons-material/Message';
import WorkIcon from '@mui/icons-material/Work';
import BarChartIcon from '@mui/icons-material/BarChart';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Link, useNavigate, useLocation } from "react-router-dom";

const iconStyle = {
    marginRight: '15px',
    width: '35px',
    height: '35px'
}


const Sidebar = () => {

    let location = useLocation();

    const loginPage = location.pathname == "/login";

    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate("/users");
    }

    const handleHomeClick = () => {
        navigate("/");
    }

    const handleProductClick = () => {
        navigate("/products");
    }

    return (
        loginPage ? <div /> :
            <div className="sidebar-container">
                <div className="sidebar-wrapper">
                    <div className="sidebarMenu">
                        <div className="sidebar-item">
                            <h3 className="sidebarTitle">Dashboard</h3>
                            <ul className="sidebarList">
                                <li className="sidebarListItem" onClick={handleHomeClick}>
                                    <Home style={iconStyle} /> Home
                                </li>
                                <li className="sidebarListItem">
                                    <Insights style={iconStyle} /> Analiytics
                                </li>
                                <li className="sidebarListItem">
                                    <TrendingUp style={iconStyle} /> Sales
                                </li>
                            </ul>
                        </div>

                        <div className="sidebar-item">
                            <h3 className="sidebarTitle">Quick Menu</h3>
                            <ul className="sidebarList">
                                <li className="sidebarListItem" onClick={handleUserClick}>
                                    <PersonIcon style={iconStyle} /> Users
                                </li>
                                <li className="sidebarListItem" onClick={handleProductClick}>
                                    <CategoryIcon style={iconStyle} /> Products
                                </li>
                                <li className="sidebarListItem">
                                    <ReceiptIcon style={iconStyle} /> Transactions
                                </li>
                                <li className="sidebarListItem">
                                    <SignalCellularAltIcon style={iconStyle} /> Reports
                                </li>
                            </ul>
                        </div>

                        <div className="sidebar-item">
                            <h3 className="sidebarTitle">Notifications</h3>
                            <ul className="sidebarList">
                                <li className="sidebarListItem">
                                    <MailOutlineIcon style={iconStyle} /> Mail
                                </li>
                                <li className="sidebarListItem">
                                    <ChatBubbleOutlineIcon style={iconStyle} /> Feedback
                                </li>
                                <li className="sidebarListItem">
                                    <MessageIcon style={iconStyle} /> Messages
                                </li>
                            </ul>
                        </div>

                        <div className="sidebar-item">
                            <h3 className="sidebarTitle">Staff</h3>
                            <ul className="sidebarList">
                                <li className="sidebarListItem">
                                    <WorkIcon style={iconStyle} /> Manage
                                </li>
                                <li className="sidebarListItem">
                                    <BarChartIcon style={iconStyle} /> Analiytics
                                </li>
                                <li className="sidebarListItem">
                                    <AttachFileIcon style={iconStyle} /> Reports
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>

    )
}

export default Sidebar;