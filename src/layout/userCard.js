import { useParams } from "react-router-dom";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";

const UserCard = () => {
    const params = useParams();
    const {userId} = params;
    
    return ( 
        <>
            {userId ? <UserPage userId={userId} /> : <UsersListPage/>}
        </>
     );
}
 
export default UserCard;