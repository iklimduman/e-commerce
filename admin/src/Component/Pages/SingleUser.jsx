import "./SingleUser.css";
import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

import { Status } from "./UserPage";


const SingleUser = (props) => {

    const location = useLocation();

    console.log(location);

    var today = new Date();
    var employeeBirthYear = today.getFullYear() - location.state.age;

    return (
        <div className="singleUserWrapper">
            <span className="title">Edit Team Member</span>
            <div className="edit">
                <div className="end-result-wrapper">
                    <div className="heading">
                        <div style={{ flex: "1" }}>
                            <img src={location.state.img}
                                style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover" }} />
                        </div>

                        <div className="member-info">
                            <span className="name-info">{location.state.firstname + " " + location.state.lastname}</span>
                            <span className="role-info">{location.state.role}</span>
                        </div>
                    </div>
                    <span className="subtitle">Account Details</span>
                    <div className="member-info">
                        <div className="row">
                            <PersonIcon />
                            <span style={{ marginLeft: "5px" }}>{location.state.firstname + location.state.lastname}</span>
                        </div>
                        <div className="row">
                            <DateRangeIcon />
                            <span style={{ marginLeft: "5px" }}>{today.getMonth() + "/" + today.getDate() + "/" + employeeBirthYear}</span>
                        </div>
                    </div>
                    <span className="subtitle">Contact Details</span>
                    <div className="member-info">
                        <div className="row">
                            <LocalPhoneIcon />
                            <span style={{ marginLeft: "5px" }}>{location.state.tel}</span>
                        </div>
                        <div className="row">
                            <LocationOnIcon />
                            <span style={{ marginLeft: "5px" }}>{location.state.address}</span>
                        </div>
                        <div className="row">
                            <MailIcon />
                            <span style={{ marginLeft: "5px" }}>{location.state.email}</span>
                        </div>
                    </div>
                    <div className="row" style={{ paddingTop: "15px" }}>
                        <div
                            style={{ fontFamily: "'Fira Sans', sans-serif", fontSize: "20px", color: "rgba(37, 37, 37, 0.76)" }}>
                            Current Status :
                        </div>
                        <div style={{ marginLeft: "10px " }}>
                            {location.state.status == "online" ? <Status status="online" /> : <Status status="offline" />}
                        </div>


                    </div>

                </div>
                <div className="edit-wrapper">
                    <form style={{ flex: "3" }}>
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="fname" placeholder={location.state.firstname}></input>
                        <label for="fname">Last Name</label>
                        <input type="text" id="fname" name="fname" placeholder={location.state.lastname}></input>
                        <label for="fname">Role</label>
                        <input type="text" id="fname" name="fname" placeholder={location.state.role}></input>
                        <label for="fname">E-Mail</label>
                        <input type="text" id="fname" name="fname" placeholder={location.state.email}></input>
                        <label for="fname">Phone</label>
                        <input type="text" id="fname" name="fname" placeholder={location.state.tel}></input>
                        <label for="fname">Address</label>
                        <input type="text" id="fname" name="fname" placeholder={location.state.address}></input>
                    </form>
                    <div className="image-edit">
                        <div className="biggerImage">
                            <img src={location.state.img} style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                            <FileUploadOutlinedIcon style={{ marginLeft: "20px" }} />
                        </div>
                        <div className="button-container">
                            <button className="update-button">UPDATE</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SingleUser;