import react, { useState } from "react";
import "./UserPage.css";

import { DataGrid } from '@mui/x-data-grid';
import { userRows } from "../../dummyData";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { Link } from "react-router-dom";



const UserPage = () => {

    const [data, setData] = useState(userRows);

    const handleDelete = (userID) => {
        setData(data.filter(item => item.id !== userID));
        console.log(data);
    }

    const Action = ({ userID }) => {

        return (
            <div>
                <Link to={"/user/" + userID}>
                    <button className="edit-button">EDIT</button>
                </Link>

                <IconButton aria-label="delete">
                    <DeleteIcon onClick={() => handleDelete(userID)} style={{ color: "rgba(202, 46, 46, 0.7)" }} />
                </IconButton>
            </div>
        )
    }
    const Avatar = ({ imgSrc, firstName, lastName }) => {
        return (
            <div style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                <img src={imgSrc} style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover", marginRight: "5px" }} />
                <span>{firstName + lastName}</span>
            </div>
        )
    }

    const Status = ({ status }) => {
        var text = '';
        status == 'online' ? text = 'ON' : text = 'OFF';
        return (
            <div className={"status " + status}>{text}</div>
        )
    }

    const Membership = ({ isPremium }) => {
        return (<span>{isPremium ? 'Premium' : 'Normal'}</span>)
    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'Username',
            headerName: 'Username',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 200,
            renderCell: (params) => {
                return (
                    <Avatar imgSrc={params.row.img} firstName={params.row.firstName} lastName={params.row.lastName} />
                )
            }
        },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
            align: 'left',
            headerAlign: 'left'
        },
        {
            field: 'email',
            headerName: 'e-mail',
            width: 200,
            align: 'left',
            headerAlign: 'left'
        },
        {
            field: 'premiumMember',
            headerName: 'Membership Type',
            width: 170,
            renderCell: (params) => (<Membership isPremium={params.row.premiumMember} />)
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 100,
            renderCell: (params) => {
                return (
                    <Status status={params.row.status} />
                )
            }
        },
        {
            headerName: 'Action',
            width: 150,
            renderCell: (params) => (<Action userID={params.row.id} />)
        }
    ];

    return (

        <div className="userList">
            <span className="title">Active Users</span>
            <div className="data-grid-container">
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={10}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>

        </div>


    )
}

export default UserPage;