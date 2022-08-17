import React from 'react';
import Useritem from './Useritem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }: any) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='container-fluid'>
        <div className='row'>
          {users.map((user: any) => (
            <Useritem key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
