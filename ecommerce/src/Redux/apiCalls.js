import { publicRequest } from "../RequestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userSlice"

export const login = async (dispatch , user)=>{
    console.log(0) ;
    console.log(user) ;
    dispatch(loginStart()) ;
    try{
        console.log(1) ;
        const res = await publicRequest.post("/auth/login",user) ;
        console.log(2) ;

        console.log("%%") ;
        console.log(res) ;
        
        dispatch(loginSuccess(res.data)) ;
    }
    catch(err){
        console.log(err) ;
        dispatch(loginFailure()) ;
    }
}