import React, { useState } from 'react';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { Form, TitleForm, InputForm, ButtonForm } from './SearchForm.styled';

export default function SearchForm({ onSubmit }) {
  const [movieName, setMovieName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (movieName.trim() === '') {
      return toast.error(
        `Sorry,there are no movie on request. Please try again`
      );
    }

    setMovieName('');
    onSubmit(movieName);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <TitleForm>Find movie by name</TitleForm>
        <div>
          <InputForm
            autoComplete="off"
            placeholder="Enter a movie name"
            type="text"
            name="query"
            value={movieName}
            onChange={e => setMovieName(e.target.value.toLowerCase())}
          />
          <ButtonForm type="submit">Search</ButtonForm>
        </div>
      </Form>
    </>
  );
}
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
