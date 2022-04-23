import React, { Fragment } from "react";

function Alert({ alert }) {
  return (
    alert !== null && (
      <Fragment>
        <div className="alert alert-warning" role="alert">
          Please, Type Something...
        </div>
      </Fragment>
    )
  );
}

export default Alert;
