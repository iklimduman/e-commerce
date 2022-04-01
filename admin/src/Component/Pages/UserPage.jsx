import react, { useState } from "react";
import "./UserPage.css";

import { DataGrid } from '@mui/x-data-grid';
import { teamRows } from "../../dummyData";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { Link, useNavigate } from "react-router-dom";

export const Status = ({ status }) => {
    var text = '';
    status == 'online' ? text = 'ON' : text = 'OFF';
    return (
        <div className={"status " + status}>{text}</div>
    )
}

const UserPage = () => {

    const [data, setData] = useState(teamRows);

    const handleDelete = (userID) => {
        setData(data.filter(item => item.id !== userID));
        console.log(data);
    }

    const navigate = useNavigate();

    const handleRedirect = (userID, firstname, lastname, age, status, email, role, img, tel, address) => {
        navigate("/user/" + userID, {
            state: {
                ID: userID,
                firstname: firstname,
                lastname: lastname,
                age: age,
                status: status,
                email: email,
                role: role,
                img: img,
                tel: tel,
                address: address
            },
        });
    };

    const Action = ({ userID, firstname, lastname, age, status, email, role, img, tel, address }) => {
        return (
            <div>
                <button className="edit-button" onClick={() => handleRedirect(userID, firstname, lastname, age, status, email, role, img, tel, address)}>EDIT</button>
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



    const Membership = ({ isPremium }) => {
        console.log(isPremium);
        return (<span>{isPremium}</span>)
    }


    const columns = [
        { field: 'id', headerName: 'ID', flex : 1 },
        {
            field: 'Username',
            headerName: 'Username',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            flex : 3,
            renderCell: (params) => {
                return (
                    <Avatar imgSrc={params.row.img} firstName={params.row.firstName} lastName={params.row.lastName} />
                )
            }
        },
        { field: 'firstName', headerName: 'First name', flex : 2 },
        { field: 'lastName', headerName: 'Last name', flex : 2 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            flex : 1,
            align: 'left',
            headerAlign: 'left'
        },
        {
            field: 'email',
            headerName: 'e-mail',
            flex : 2 ,
            align: 'left',
            headerAlign: 'left'
        },
        {
            field: 'role',
            headerName: 'Role',
            flex : 2 ,
            align: 'left',
            headerAlign: 'left',
            renderCell: (params) => {
                return (
                    <Membership isPremium={params.row.role} />
                )
            }
        },
        {
            field: 'status',
            headerName: 'Status',
            flex : 1,
            renderCell: (params) => {
                return (
                    <Status status={params.row.status} />
                )
            }
        },
        {
            headerName: 'Action',
            flex : 2,
            renderCell: (params) => (<Action
                userID={params.row.id}
                firstname={params.row.firstName}
                lastname={params.row.lastName}
                age={params.row.age}
                status={params.row.status}
                email={params.row.email}
                role={params.row.role}
                img={params.row.img}
                tel={params.row.tel}
                address={params.row.address}
            />)
        }
    ];

    const redirectNewUser = () => {
        navigate("/newuser") ;
    }

    return (

        <div className="userList">
            <div className="title-warpper">
                <span className="title">My Team</span>
                <button className="add-new-button" onClick={redirectNewUser}>ADD NEW</button>
            </div>

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