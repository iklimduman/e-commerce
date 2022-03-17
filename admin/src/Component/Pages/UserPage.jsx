import react from "react";
import "./UserPage.css";

import { DataGrid } from '@mui/x-data-grid';
import { userRows } from "../../dummyData";

const Avatar = ({ imgSrc , firstName , lastName }) => {
    
    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection : "row" }}>
                    <img src={imgSrc} style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover", marginRight : "5px" }} />
                    <span>{firstName + lastName}</span>
                </div>
    )
}

const Status = ({status}) =>{
    var text = '' ;
    status == 'online' ? text='ON' : text='OFF' ;
    return (
        <div className={"status" + status}>{text}</div>
    )
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
    },
    {
        field : 'email',
        headerName : 'e-mail',
        width : 200,
    },
    {
        field : 'status' ,
        headerName : 'Status',
        width : 100,
        renderCell : (params) => {
            return (
                <Status status={params.row.status} />
            )
        }
    }

];


const UserPage = () => {
    return (
        <div className="userList">
            <DataGrid
                rows={userRows}
                columns={columns}
                pageSize={10}
                checkboxSelection
            />
        </div>
    )
}

export default UserPage;