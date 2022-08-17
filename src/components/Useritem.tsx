import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Useritem = ({ user: { login, avatar_url } }: any) => {
  return (
    <div className='col-12 col-sm-4 col-md-4 col-lg-4 p-0 pt-3'>
      <div
        className='card'
        style={{ width: '100%', padding: '0.5rem', margin: '0.2rem' }}
      >
        <p>Profile from:</p>
        <img
          src={avatar_url}
          className='card-img-top border rounded-circle'
          alt='Avatar'
          style={{ width: '100%', margin: 'auto', maxWidth: '15rem' }}
        />
        <div className='card-body'>
          <p>username:</p>
          <h5 className='card-title'>{login}</h5>
          <p className='card-text'></p>
          <Link to={`/user/${login}`} className='btn btn-secondary'>
            More info
          </Link>
        </div>
      </div>
    </div>
  );
};

Useritem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Useritem;
