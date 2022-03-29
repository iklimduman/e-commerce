import { publicRequest } from "./RequestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userSlice"

export const login = async (dispatch , user)=>{
    
    console.log(user) ;
    dispatch(loginStart()) ;
    try{
        const res = await publicRequest.post("/auth/login",user) ;
        console.log(res) ;
        
        dispatch(loginSuccess(res.data)) ;
    }
    catch(err){
        console.log(err) ;
        dispatch(loginFailure()) ;
    }
}