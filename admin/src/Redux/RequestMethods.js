import axios from "axios";

const BASE_URL = "http://localhost:5000/api/" ;

// after i will read this token on login auth method, but for now i am using this temporary token

//const TOKEN = (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)).currentUser.accesToken ;
const TOKEN = "" ;
console.log( TOKEN ) ;


export const publicRequest = axios.create({
    baseURL : BASE_URL,
}) ;

export const userRequest = axios.create({
    baseURL : BASE_URL ,
    header : { token : `Baerer ${TOKEN}`}
})