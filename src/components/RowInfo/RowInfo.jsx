import React from "react";

const RowInfo = ({
  data: {
    firstName,
    lastName,
    description,
    address: { streetAddress, city, state, zip },
  },
}) => {
  return (
    <div className="card bg-light mt-2 mb-4">
      <div className="card-body">
        <h5>
          {firstName} {lastName}
        </h5>
        <div className="card-text">
          <p>Описание:</p>
          <textarea
            cols="30"
            rows="4"
            className="form-control"
            value={description}
            readOnly
          />
        </div>
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Адрес проживания: <b>{streetAddress}</b>
        </li>
        <li className="list-group-item">
          Город: <b>{city}</b>
        </li>
        <li className="list-group-item">
          Провинция/штат: <b>{state}</b>
        </li>
        <li className="list-group-item">
          Индекс: <b>{zip}</b>
        </li>
      </ul>
    </div>
  );
};

export default RowInfo;
