import "./App.css";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import React, { useState, Fragment } from "react";
import axios from "axios";
import Search from "./components/Search";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import User from "./components/User";
import PropTypes from "prop-types";
import Notfound from "./components/Notfound";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  const onSearch = async (searchUser) => {
    setLoading(true);
    const data = await axios.get(
      `https://api.github.com/search/users?q=${searchUser}&${process.env.REACT_APP_CLIENT_ID}&${process.env.REACT_APP_CLIENT_SECRET}`
    );
    setUsers(data.data.items);
    setLoading(false);
  };

  const SpecUser = async (username) => {
    setLoading(true);
    const data = await axios.get(
      `https://api.github.com/users/${username}?${process.env.REACT_APP_CLIENT_ID}&${process.env.REACT_APP_CLIENT_SECRET}`
    );
    setUser(data.data);
    setLoading(false);
  };

  const onAlert = async (msg, type) => {
    setAlert(msg, type);
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const clearSearch = () => {
    setUsers([]);
    setLoading(false);
  };

  const searchRepos = async (username) => {
    setLoading(true);
    const data = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&${process.env.REACT_APP_CLIENT_ID}&${process.env.REACT_APP_CLIENT_SECRET}`
    );
    setRepos(data.data);
    setLoading(false);
  };
  return (
    <Router>
      <div className="App">
        <Navbar title="Github Finder" />
        <div className="container pt-2">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Alert alert={alert} />
                  <Search
                    onSearch={onSearch}
                    onAlert={onAlert}
                    clearSearch={clearSearch}
                    showClear={users.length > 0 ? true : false}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <Fragment>
                  <User
                    {...props}
                    SpecUser={SpecUser}
                    searchRepos={searchRepos}
                    repos={repos}
                    user={user}
                    loading={loading}
                  />
                </Fragment>
              )}
            />
            <Route component={Notfound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

App.proptype = {
  users: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  alert: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default App;
