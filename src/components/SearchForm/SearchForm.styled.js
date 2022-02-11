import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const TitleForm = styled.h2`
  margin: 0;
  padding: 20px 0;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 1.62;
  letter-spacing: 0.06em;
  color: #00584e;
`;

export const InputForm = styled.input`
  height: 20px;
  /* margin: 0; */
  width: 300px;
  padding: 10px;
  border: none;
  border: 3px solid orange;
  /* border-radius: 6px; */
  background-color: white;
`;

export const ButtonForm = styled.button`
  min-height: 45px;
  min-width: 40px;
  background-color: orange;
  border: 1px solid rgba(27, 31, 35, 0.15);
  /* border-radius: 6px; */
  box-shadow: rgba(27, 31, 35, 0.1);
  box-sizing: border-box;
  color: #00584e;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 5px;
  text-align: center;
  text-decoration: none;
`;
