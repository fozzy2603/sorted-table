import React, { useState } from "react";
import compareValues from "./helpers/compareValues";
import {
  Loader,
  RowInfo,
  DataChanger,
  Pagination,
  SearchForm,
  Table
} from "./components";


function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortField, setSortField] = useState("id");
  const [selectedRow, setSelectedRow] = useState(null);
  const [isDataSelected, setIsDataSelected] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(null);

  
  const postsPerPage = 50;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const filteredData = searchValue
    ? data.filter(
        (item) =>
          item.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.lastName.toLowerCase().includes(searchValue.toLowerCase())
      )
    : data;
  const displayData = filteredData.slice(indexOfFirstPost, indexOfLastPost);

  const fetchData = async (url) => {
    setIsDataSelected(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.sort(compareValues("id", "asc")));
      setLoading(false);
    } catch (e) {
      console.log("Error in fetchData:", e);
      setError("Sorry, but something went wrong. Look to the console");
      setLoading(false);
    }
  };

  const sortBy = (sortField) => {
    const sortType = sortDirection === "asc" ? "desc" : "asc";
    const sortedData = data.sort(compareValues(sortField, sortType));
    setSortDirection(sortType);
    setSortField(sortField);
    setData([...sortedData]);
  };

  const paginate = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (value) => {
    setSearchValue(value);
    setCurrentPage(1);
  };

  if (!isDataSelected) {
    return <DataChanger fetchData={fetchData} />;
  }

  if (error) {
    return (
      <div className="container mt-5">
        <p className="bg-danger text-white text-center pb-2 pt-2">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5">
      {loading ? (
        <Loader />
      ) : (
        <>
          <SearchForm handleSearch={handleSearch} />
          {selectedRow && <RowInfo data={selectedRow} />}
          <Table
            data={displayData}
            sortDirection={sortDirection}
            sortField={sortField}
            sortBy={sortBy}
            setSelected={setSelectedRow}
            selectedRow={selectedRow}
          />
          {data.length > postsPerPage && (
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={filteredData.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
