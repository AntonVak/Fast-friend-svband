import BookMark from "./bookMark";
import Qualitie from "./qualitie";


const User = ({_id, name, qualities, profession, completedMeetings, rate, onDelete, onToggleBookMark, bookmark}) => {

    return (
      <>
        {
          <tr>
            <td className="text-dark">{name}</td>
            <td >
              {
                qualities.map((qual) => (
                  <Qualitie
                    key={qual._id}
                    {...qual}
                  /> 
                  
                ))
              }
            </td>

            <td className="text-center">{profession.name}</td>
            <td className="text-center">{completedMeetings}</td>
            <td className="text-center">{rate}</td>
            <td className="text-center">
            <BookMark
              status={bookmark}
              onClick={() => onToggleBookMark(_id)}
            />
            </td>
            <td>
              <button className="btn btn-warning" onClick={()=> onDelete(_id)}>
                Delete
              </button>
            </td>
          </tr>
        }
      </>
    );
}

export default User;