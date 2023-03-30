import { useEffect, useState } from "react";
import api from '../../../api'
import QualitiesList from "../components/qualitiesList";

const UserPage = ({userId}) => {
    const [user, setUser] = useState();
    let history = useHistory();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data))
    });

    

  function handleClick() {
    history.push("/users");
  }

    if(user) {
        return (
            <div>
                <h1>{user.name}</h1>
                <h2>Profession: {user.professions.name}</h2>
                <QualitiesList qualities={user.qualities}/>
                <p>CompletedMeetings: {user.completedMeetings} </p>
                <h2>Rate: {user.rate}</h2>
                <button onClick={handleClick}>All Users</button>
            </div>
        )
    }

    return ( 
        <h1>UserPage {userId}</h1>
     );
}
 
export default UserPage;