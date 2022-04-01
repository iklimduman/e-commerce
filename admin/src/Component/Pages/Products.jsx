import "./Products.css" ;
import { AllProducts } from "../../dummyData";
import "./UserPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const Products = () => {

    const [data,setData] = useState(AllProducts);

    const handleDelete = (productID) => {
        setData(data.filter(item => item.id !== productID));
        console.log(data);
    }

    const navigate = useNavigate();

    const handleRedirect = (productID, title, price, stock, img) => {
        navigate("/product/" + productID, {
            state: {
                ID: productID,
                title: title,
                price: price,
                stock: stock,
                img: img
            },
        });
    };

    const Action = ({ productID, title, price, stock, img}) => {
        return (
            <div>
                <button className="edit-button" onClick={() => handleRedirect(productID, title, price, stock, img)}>EDIT</button>
                <IconButton aria-label="delete">
                    <DeleteIcon onClick={() => handleDelete(productID)} style={{ color: "rgba(202, 46, 46, 0.7)" }} />
                </IconButton>
            </div>
        )
    }
    const Avatar = ({ imgSrc, title }) => {
        return (
            <div style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                <img src={imgSrc} style={{ width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover", marginRight: "5px" }} />
                <span>{title}</span>
            </div>
        )
    }


    const columns = [
        { field: 'id', headerName: 'ID', flex : 1 },
        {
            field: 'img',
            headerName: 'Product',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            flex : 3,
            renderCell: (params) => {
                return (
                    <Avatar imgSrc={params.row.img} title={params.row.title} />
                )
            }
        },
        {
            field: 'price',
            headerName: 'Price',
            type: 'number',
            flex : 2,
            align: 'left',
            headerAlign: 'left'
        },
        {
            field : "inStock",
            headerName : "In Stock",
            flex : 2,
            align: 'left',
            headerAlign: 'left',
            renderCell : (params) => {
                return (
                    <span>{params.row.stock === 0 ? "Sold Out" : "In Stock"}</span>
                )
            }
        },
        {
            field: 'stock',
            headerName: 'Stock',
            flex : 2,
            align: 'left',
            headerAlign: 'left'
        },
        {
            headerName: 'Action',
            flex : 2,
            renderCell: (params) => (<Action
                productID={params.row.id}
                title={params.row.title}
                price={params.row.price}
                stock={params.row.stock}
                img={params.row.img}
            />)
        },
    ];

    const redirectNewProduct = () => {
        navigate("/newProduct") ;
    }

    return(
        <div className="all-products-wrapper">
            <div className="title-warpper">
                <span className="title">All Products</span>
                <button className="add-new-button" onClick={redirectNewProduct}>ADD NEW</button>
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

export default Products ;