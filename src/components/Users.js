import React from "react";
import Useritem from "./Useritem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map((user) => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
