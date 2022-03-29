import axios from "axios";

const BASE_URL = "http://localhost:5000/api/" ;

// after i will read this token on login auth method, but for now i am using this temporary token

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDY5YmNiY2QwZDA2NTgxN2E0MmI3ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjMxODUyMSwiZXhwIjoxNjQ2NTc3NzIxfQ.ooAE1WJBQQmhJtLnW9UgMbjBeANE1L2S729uJsLsuP4" ;

export const publicRequest = axios.create({
    baseURL : BASE_URL,
}) ;

export const userRequest = axios.create({
    baseURL : BASE_URL ,
    header : { token : `Baerer ${TOKEN}`}
})