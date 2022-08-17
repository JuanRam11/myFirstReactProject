import React, { Fragment } from 'react';

function About() {
  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div
            className='col-12 col-sm-12 col-md-12 col-lg-12'
            style={{ display: 'flex', height: '90vh' }}
          >
            <div className='border rounded m-auto' style={{ width: '32%' }}>
              <h1>About this Web App</h1>
              <p>App to Search Github Users</p>
              <p>Version 1.0.1</p>
              <p>Created by Juan Then</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
