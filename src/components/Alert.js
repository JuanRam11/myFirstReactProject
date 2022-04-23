import React, { Fragment } from 'react';

function Alert({ alert }) {
  return (
    alert !== null && (
      <Fragment>
        <div className='alert alert-danger' role='alert'>
          {alert}
        </div>
      </Fragment>
    )
  );
}

export default Alert;
