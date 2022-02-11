import React, { useState } from 'react';
import { Form, TitleForm, InputForm, ButtonForm } from './SearchForm.styled';

export default function SearchForm({ onSubmit }) {
  const [movieName, setMovieName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(movieName);
    setMovieName('');
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
            name="movieName"
            value={movieName}
            onChange={e => setMovieName(e.target.value.toLowerCase())}
          />
          <ButtonForm type="submit">Search</ButtonForm>
        </div>
      </Form>
    </>
  );
}
