import React, { useState } from 'react';

export default function SearchForm({ onSubmit }) {
  const [movieName, setMovieName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(movieName);
    setMovieName('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Find movie by name</p>
        <input
          autoComplete="off"
          placeholder="Enter a movie name"
          type="text"
          name="movieName"
          value={movieName}
          onChange={e => setMovieName(e.target.value.toLowerCase())}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
