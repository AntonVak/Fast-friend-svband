import { useParams } from "react-router-dom";
import Users from "../components/users";
import UserPage from "./userPage";

const UserCard = () => {
    const params = useParams();
    const {userId} = params;
    
    return ( 
        <>
            {userId ? <UserPage userId={userId} /> : <Users/>}
        </>
     );
}
 
export default UserCard;