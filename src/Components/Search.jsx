import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setval } from '../redux/slice';

function Search() {
  const [search, setsearch] = useState('');
  const dispatch = useDispatch();

  const handlechange = (e) => {
    e.preventDefault();
    setsearch(e.target.value);
  };

  const Submit = (e) => {
    e.preventDefault();
    dispatch(setval(search));
  };

  return (
    <div className="container my-4">
      <form onSubmit={Submit} className="d-flex justify-content-center">
        <input
          type="text"
          className="form-control w-50 me-2"
          placeholder="Enter city name..."
          onChange={handlechange}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
