import React from "react";
import TableTh from "./TableTh";
import TableRow from "./TableRow";
import EmptyData from '../EmptyData';

const tableTitles = [
  {
    id: "id",
    title: "ID",
  },
  {
    id: "firstName",
    title: "First name",
  },
  {
    id: "lastName",
    title: "Last name",
  },
  {
    id: "email",
    title: "Email",
  },
  {
    id: "phone",
    title: "Phone",
  },
];


const Table = ({ data, sortBy, sortField, sortDirection, setSelected, selectedRow }) => {
  if(!data.length) return <EmptyData />
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {tableTitles.map(({ id, title }) => (
            <TableTh
              key={id}
              title={title}
              id={id}
              sortField={sortField}
              sortBy={sortBy}
              sortDirection={sortDirection}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((rowData) => (
          <TableRow
            key={`${rowData.id}-${rowData.phone}`}
            rowData={rowData}
            selectedRow={selectedRow}
            setSelected={setSelected}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
