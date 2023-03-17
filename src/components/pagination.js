import _ from "lodash";
// import PropTypes from "prop-types";

const Pagination = ({itemsCount, pageSize, onPageChange, currentPage}) => {
  const pageCount =Math.ceil(itemsCount / pageSize);
  if(pageCount === 1) {
    return null
  }
  // реализация из числа pageCount -  в массив.
  const pages = _.range(1, pageCount + 1)

  return (
    <nav className="m-3">
      <ul className="pagination">
      {pages.map((page) => (
        <li className={"page-item m-1"+(currentPage === page ? " active" : "")} key={"page_" + page}>
          <button className="page-link" onClick={()=> onPageChange(page)}>{page}</button>
        </li>
      ))

      }
        
      </ul>
    </nav>
  );
};
// Pagination.prototype = {
//   itemsCount: PropTypes.number.isRequired,
//   pageSize: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
//   currentPage: PropTypes.number.isRequired,
// };

export default Pagination;
