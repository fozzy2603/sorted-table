import React, { useState } from "react";

const SearchForm = ({ handleSearch }) => {
  const [value, setValue] = useState("");
  return (
    <form
      className="input-group mb-3"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch(value);
      }}
    >
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search by first name and last name..."
      />
      <div className="input-group-append">
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
