import FilterList from "./filterList";
import { useState, useEffect} from "react";
import {paginate} from "../utils/pagination";
import Pagination from "./pagination";
import api from "../api";
import SearchStatus from "./searchStaatus";
import UsersTable from "./usersTable";
import _ from "lodash";


const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();
  const [sortBy, setSortBy] = useState({iter: 'name', order: 'asc'});

  const pageSize = 9;

  const [users, setUsers] = useState()
  // console.log()

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data))
  }, []);

 const handleDelete = (userId) =>{
  const userDel = users.filter((user) => user._id !== userId)
  setUsers(userDel);
 }
 const handleToggleBookMark = (id) => {
   setUsers(
     users.map((user) => {
       if (user._id === id) {
         return { ...user, bookmark: !user.bookmark };
       }
       return user;
     })
   );
 };

  useEffect(() => {
    // console.log("request")
    api.professions.fetchAll().then((data) => setProfessions(data))
  }, []);

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf]);

  const handleProfessionSelect = (item) => {
    setSelectedProf(item)
  }
  const handlePageChange = (pageIndex) => {
    // console.log("page-")
    setCurrentPage(pageIndex)
  }

  const handleSort = (item) => {
    setSortBy(item)
  }

  if(users) {

  
  const filteredUsers = selectedProf
        ? users.filter(
              (user) =>
                  JSON.stringify(user.profession) ===
                  JSON.stringify(selectedProf)
          )
        : users;

  const count = filteredUsers.length;

  const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);

  //вернуть новый массив с определенным количеством юзеров
  const userCrop = paginate(sortedUsers, currentPage, pageSize)

  
  const clearFilter = () => {
    setSelectedProf()
  }

  return (
    <div className="d-flex">
      {professions && (
        <div className="filter-l d-flex flex-column flex-shrink-0 p-3">
          <FilterList
            items={professions}
            onItemSelect={handleProfessionSelect}
            selectedProf={selectedProf}
            // valueProperty={"_id"}
            // contentProperty={"name"}
          />

          <button className="btn btn-secondary mt-2" onClick={clearFilter}>
            Очистить
          </button>
        </div>
      )}

      <div className="d-flex flex-column">
        <SearchStatus users={count} />
        {count > 0 && (
          <UsersTable
            users={userCrop}
            onSort={handleSort}
            onDelete={handleDelete}
            onToggleBookMark={handleToggleBookMark}
            selectedSort={sortBy}
          />
        )}
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
        };
        return 'Loading...'
};

export default Users;
