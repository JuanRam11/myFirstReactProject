import React from "react";
import Repositem from "./Repositem";

function Repos({ Repos }) {
  return Repos.map((repo) => <Repositem repo={repo} key={repo.id} />);
}

export default Repos;
