import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Useritem = ({ user: { login, avatar_url } }) => {
  return (
    <div
      className="card"
      style={{ width: "9rem", padding: "0.5rem", margin: "0.2rem" }}
    >
      <img
        src={avatar_url}
        className="card-img-top border rounded-circle"
        alt="Avatar"
        style={{ width: "100%" }}
      />
      <div className="card-body">
        <h5 className="card-title">{login}</h5>
        <p className="card-text"></p>
        <Link to={`/user/${login}`} className="btn btn-info">
          More
        </Link>
      </div>
    </div>
  );
};

Useritem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Useritem;
