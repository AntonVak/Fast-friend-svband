import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import BookMark from "./bookMark";
// import User from "./user";

const UsersTable = ({ users, onSort, selectedSort, onDelete, onToggleBookMark, ...rest }) => {
  const columns = {
    name: { path: "name", name: "Name" },
    qualities: { name: "Qualities" },
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
    <table className="table">
      <TableHeader {...{ onSort, selectedSort, columns }} />
      <TableBody {...{ columns, data: users }} />
      {/* <tbody>
              {users.map((user) => (
                <User key={user._id} {...user} {...rest} />
              ))}
            </tbody> */}
    </table>
  );
};

export default UsersTable;
