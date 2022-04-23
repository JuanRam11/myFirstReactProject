import React from "react";

function Repositem({ repo }) {
  return (
    <div className="container-fluid border border-solid rounded text-start">
      <h4>
        <a className="text-dark" href={repo.html_url}>
          {repo.name}
        </a>
      </h4>
    </div>
  );
}

export default Repositem;
