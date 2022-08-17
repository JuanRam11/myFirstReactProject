import React from 'react';
import Repositem from './Repositem';

function Repos({ Repos }: any) {
  return Repos.map((repo: any) => <Repositem repo={repo} key={repo.id} />);
}

export default Repos;
