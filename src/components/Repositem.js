import React from 'react';

function Repositem({ repo }) {
  return (
    <div className='col-12 col-sm-12 col-md-12 col-lg-12 text-start border-bottom rounded py-1'>
      <h4>
        <a className='text-dark' href={repo.html_url}>
          {repo.name}
        </a>
      </h4>
    </div>
  );
}

export default Repositem;
