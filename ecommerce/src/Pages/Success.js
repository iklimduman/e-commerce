import { useLocation } from "react-router-dom";

const Success = () => {
    const location = useLocation() ;

    console.log(location) ;
    
    return (
        <div>
            Succesfull payment
        </div>
    )
}

export default Success ;