// import React from 'react'
// import PropTypes from "prop-types";

 const FilterList = ({onItemSelect, items, valueProperty,
  contentProperty, selectedProf}) => {
    //  console.log(Object.keys(items))
    if (!Array.isArray(items)) {
      return (
        <ul className="list-group">
          {Object.keys(items).map((item) => (
            <li
              key={items[item][valueProperty]}
              className={
                "list-group-item" +
                (items[item] === selectedProf ? " active" : "")
              }
              onClick={() => onItemSelect(items[item])}
              role="button"
            >
              {items[item][contentProperty]}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item[valueProperty]}
            className={
              "list-group-item" + (item === selectedProf ? " active" : "")
            }
            onClick={() => onItemSelect(item)}
            role="button"
          >
            {item[contentProperty]}
          </li>
        ))}
      </ul>
    );
  };

FilterList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name"
};
// FilterList.prototype = {
//     items: PropTypes.object.isRequired,
// }
export default FilterList;