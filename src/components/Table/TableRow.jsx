import React from "react";

const TableRow = ({ rowData, setSelected, selectedRow }) => {
  const { id, firstName, lastName, email, phone } = rowData;
  const activeClass = selectedRow && (selectedRow.id === id && selectedRow.phone === phone);
  return (
    <tr 
      onClick={() => setSelected(rowData)}
      className={activeClass ? 'active' : ''}
    >
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
};

export default TableRow;
