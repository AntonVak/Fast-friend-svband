import FilterList from "./filterList";
import { useState, useEffect} from "react";
import {paginate} from "../utils/pagination";
import Pagination from "./pagination";
import api from "../api";
import SearchStatus from "./searchStaatus";
import UsersTable from "./usersTable";
import _ from "lodash";


const Users = ({users: allUsers, ...rest}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();

  const [sortBy, setSortBy] = useState({iter: 'name', order: 'asc'});

  const pageSize = 9;

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

  const filteredUsers = selectedProf
        ? allUsers.filter(
              (user) =>
                  JSON.stringify(user.profession) ===
                  JSON.stringify(selectedProf)
          )
        : allUsers;

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
            {...rest}
            onSort={handleSort}
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

export default Users;
