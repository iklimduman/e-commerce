import React from "react";
import "./TeamMember.css";

import { newTeamMembers } from "../../dummyData";
import VisibilityIcon from '@mui/icons-material/Visibility';

const Member = ({ imgSrc, name, job }) => {
    return (
        <div className="member">
            <div className="img-cont">
                <img src={imgSrc} className="avatar" />
            </div>

            <div className="info-container">
                <span style={{fontSize : "18px"}}>{name}</span>
                <span style={{ color: "rgba(32, 30, 34, 0.76) " }}>{job}</span>
            </div>

            <div className="button-container">
                <a className="display-button">
                    <VisibilityIcon style={{marginRight:"5px"}}/>
                    Display
                </a>
            </div>

        </div>
    )
}

const TeamMember = () => {
    return (
        <div className="team-member-wrapper">
            <span className="title">New Team Members</span>
            {newTeamMembers.map((member) =>
                <Member imgSrc={member.img} name={member.name} job={member.job} />)}
        </div>
    )
}

export default TeamMember;