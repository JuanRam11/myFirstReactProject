import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ onSearch, showClear, onAlert, clearSearch }) => {
  const [text, setText] = useState('');

  const Onsubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      onAlert('Please Type Something on Search Bar', 'Danger');
    } else {
      onSearch(text);
      setText('');
    }
  };

  const Onchange = (e) => setText(e.target.value);

  const onClick = (e) => {
    e.preventDefault();
    setText('');
    clearSearch(text);
  };

  return (
    <form onSubmit={Onsubmit}>
      <input
        type='text'
        name='text'
        className='form-control'
        placeholder='Search'
        value={text}
        onChange={Onchange}
      ></input>
      <input
        type='submit'
        value='Search'
        className='btn-dark btn-block form-control mt-2'
      />
      {showClear && (
        <button
          className='btn btn-secondary form-control mt-2'
          onClick={onClick}
        >
          Clear
        </button>
      )}
    </form>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  onAlert: PropTypes.func.isRequired,
};

export default Search;
