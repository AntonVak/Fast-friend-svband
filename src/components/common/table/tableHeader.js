const TableHeader = ({ onSort, selectedSort, columns }) => {
  
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc",
      });
    } else {
      onSort({ path: item, order: "asc" });
    }
  };

  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            //проврка названия на фильтр
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
            // стрелочка при наведении на кнопку
            {...{ role: columns[column].path && "button" }}
            scope="col"
          >
            {columns[column].name}
          </th>
        ))}

        {/* <th onClick={() => handleSort("name")} scope="col">
            Name
          </th>
          <th scope="col">Qualities</th>
          <th
            onClick={() => handleSort("profession.name")}
            scope="col"
            className="text-center"
          >
            Professions
          </th>
          <th
            onClick={() => handleSort("completedMeetings")}
            scope="col"
            className="text-center"
          >
            Number of meetings
          </th>
          <th
            onClick={() => handleSort("rate")}
            scope="col"
            className="text-center"
          >
            Rate
          </th>
          <th scope="col" onClick={() => handleSort("bookmark")}>
            bookmark
          </th>
          <th></th> */}
      </tr>
    </thead>
  );
};

export default TableHeader;
