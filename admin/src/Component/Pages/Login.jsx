import react , { useState} from "react"

export const Login = () => {

    const [user, setUser] = useState({
        username : "",
        password : ""
    }) ;

    const handleChange = (e) => {
        switch(e.target.name){
            case "username-input" :
                setUser({
                    ...user,
                    username : e.target.value
                })
                break;
            case "password-input" :
                setUser({
                    ...user,
                    password : e.target.value
                })
                break ;
            
            default :
        }
    }
    
    const handleLogin = (e) => {
        e.preventDefaul();
    }

    return (
        <div>
            <input type="text" name="username-input" placeholder="username" onChange={e => handleChange(e)}/>
            <input type="password" name="password-input" placeholder="password" onChange={e => handleChange(e)}/>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}