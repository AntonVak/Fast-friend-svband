import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import BookMark from "./bookMark";
import QualitiesList from "./qualitiesList";
import Table from "./table";
import { Link } from "react-router-dom";


const UsersTable = ({ users, onSort, selectedSort, onDelete, onToggleBookMark }) => {
  const columns = {
    name: { path: "name", name: "Name", component: (user) => <Link to={`/users/${user._id}`}>{user.name}</Link> },
    qualities: { name: "Qualities", component: (user) =>(
      <QualitiesList qualities={user.qualities}/>
    ) },
    profession: { path: "profession.name", name: "Professions" },
    completedMeetings: {
      path: "completedMeetings",
      name: "Number of meetings",
    },
    rate: { path: "rate", name: "Rate" },
    bookmark: {
      path: "bookmark",
      name: "bookmark",
      component: (user) => (
        <BookMark
          status={user.bookmark}
          onClick={() => onToggleBookMark(user._id)}
        />
      ),
    },
    delete: {
      component: (user) => (
        <button className="btn btn-warning" onClick={() => onDelete(user._id)}>
          Delete
        </button>
      ),
    },
  };
  
  return (
    
    <Table onSort={onSort} selectedSort={selectedSort} columns={columns} data={users}>
      <TableHeader {...{ onSort, selectedSort, columns }} />
      <TableBody {...{ columns, data: users }} />
    </Table>
      
    
  );
};

export default UsersTable;
