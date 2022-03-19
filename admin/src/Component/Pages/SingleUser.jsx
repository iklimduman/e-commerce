import "./SingleUser.css";
import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';


const SingleUser = (props) => {

    const location = useLocation() ;

    console.log(location) ;

    return (
        <div className="singleUserWrapper">
        </div>
    )
}

export default SingleUser;