import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import Repos from "./Repos";

const User = ({ user, loading, match, SpecUser, searchRepos, repos }) => {
  useEffect(() => {
    SpecUser(match.params.login);
    searchRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="container border rounded">
      <Link to="/">
        <div className="text-start text-dark">
          <i className="fas fa-long-arrow-alt-left"> Back</i>
        </div>
      </Link>
      <div className="p-4 d-flex now-wrap justify-content-center align-items-center">
        <b className="pe-1 py-0 my-0 mr-1">Hirable: </b>

        {hireable ? (
          <i className="pl-1 fas fa-check text-success"></i>
        ) : (
          <i className="pl-1 fas fa-ml-1 fas fa-times-circle text-danger"></i>
        )}
      </div>
      <img
        className="img img-responsive rounded-circle"
        src={avatar_url}
        alt="Avatar"
        style={{ width: "20%" }}
      ></img>
      <h1>{name}</h1>
      <p>{bio}</p>
      <div className="text-left">
        <p>{location}</p>
        <p>
          <b>Blog:</b> {blog}
        </p>
        <p>
          <b>User:</b> {login}
        </p>
        <p>
          <b>HTML URL:</b> {html_url}
        </p>
      </div>
      <div className="d-flex flex now-wrap justify-content-center">
        <p className="badge rounded-pill bg-success mx-2 text-dark fs-6">
          <b>Followers: </b>
          {followers}
        </p>

        <p className="badge rounded-pill bg-info mx-2 text-dark fs-6">
          <b>Following: </b>
          {following}
        </p>
        <p className="badge rounded-pill bg-secondary mx-2 text-dark fs-6">
          <b>Public gists: </b>
          {public_gists}
        </p>
        <p className="badge rounded-pill bg-warning mx-2 text-dark fs-6">
          <b>Public repos: </b>
          {public_repos}
        </p>
      </div>
      <h2>Repositories</h2>
      <div className="container d-block text-left">
        <Repos Repos={repos} />
      </div>
    </div>
  );
};

User.proptype = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  SpecUser: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

export default User;
