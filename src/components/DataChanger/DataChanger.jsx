import React from 'react';

const DataChanger = ({ fetchData }) => {
    const smallDataUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
    const largeDataUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
    return (
        <div className="d-flex justify-content-center mt-5">
            <button
                type="button"
                className="btn btn-success"
                onClick={() => fetchData(smallDataUrl)}
            >
                32 items
            </button>
            <button
                type="button"
                className="btn btn-danger ml-2"
                onClick={() => fetchData(largeDataUrl)}
            >
                1000 items
            </button>
        </div>
    );
};

export default DataChanger;
