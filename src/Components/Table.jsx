import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useNavigate } from "react-router-dom";
import { usersURL } from "../url";
import imgFailed from "../Assets/imgFailed.jpg";

const Table = (props) => {
  const imageFormatter = (cell) => {
    return <img className="tableImg" src={cell ? cell : imgFailed} alt="" />;
  };
  let navigate = useNavigate();

  let clickEvents = {
    onClick: (e, props) => {
      navigate(`${usersURL}/profile?id=${props.id}`, { state: { props } });
    },
  };
  let columns;
  if (props.count === 0) {
    return (
      <div className="dangerBanner">No User Found. Add or Generate User</div>
    );
  } else {
    columns = [
      {
        sort: true,
        dataField: "id",
        text: "ID",
      },
      {
        dataField: "avatar",
        text: "AVATAR",
        formatter: imageFormatter,
      },
      { sort: true, dataField: "first_name", text: "FIRST NAME" },
      {
        sort: true,
        dataField: "last_name",
        text: "LAST NAME",
      },
      {
        dataField: "email",
        text: "EMAIL",
      },
    ];
  }
  return (
    <div className="Table">
      <BootstrapTable
        keyField="id"
        data={props.list}
        columns={columns}
        rowEvents={clickEvents}
        hover
        condensed
        pagination={paginationFactory()}
      />
    </div>
  );
};

export default Table;
