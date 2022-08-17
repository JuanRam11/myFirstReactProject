import React, { Fragment } from 'react';

function Alert({ alert }: any) {
  if (alert !== null) {
    return (
      <Fragment>
        <div className='alert alert-danger' role='alert'>
          {alert}
        </div>
      </Fragment>
    );
  } else {
    return <Fragment></Fragment>;
  }
}

export default Alert;
