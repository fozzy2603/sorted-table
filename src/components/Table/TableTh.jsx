import React from "react";

const TableTh = ({ sortBy, title, id, sortField, sortDirection }) => {
  return (
    <th 
        className={sortField === id ? 'active' : ''}
        onClick={() => sortBy(id)}
    >
        {title} 
        {sortField === id
            ? sortDirection === 'asc' ?  <span> &darr;</span> : <span> &uarr;</span>
            : null
        }
    </th>
  );
};

export default TableTh;
