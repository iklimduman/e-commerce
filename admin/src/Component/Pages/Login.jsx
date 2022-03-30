import react, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/apiCalls";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleChange = (e) => {
        switch (e.target.name) {
            case "username-input":
                setUser({
                    ...user,
                    username: e.target.value
                })
                break;
            case "password-input":
                setUser({
                    ...user,
                    password: e.target.value
                })
                break;

            default:
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch, user);

        navigate("/") ;
    }

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column"
            }}>
                <input style={{ width: "20vw", border: "1px solid #DFDEE0", height: "50px" }}
                    type="text" name="username-input" placeholder="username" onChange={e => handleChange(e)} />
                <input style={{ width: "20vw", border: "1px solid #DFDEE0", height: "50px" }}
                    type="password" name="password-input" placeholder="password" onChange={e => handleChange(e)} />
                <button style={{width : "50%"}}
                onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}