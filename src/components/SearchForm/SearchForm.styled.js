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
  color: ${props => props.theme.colors.baseColor};
`;

export const InputForm = styled.input`
  height: 20px;
  width: 300px;
  padding: 10px;
  border: none;
  border: 3px solid ${props => props.theme.colors.orange};
  background-color: ${props => props.theme.colors.white};
`;

export const ButtonForm = styled.button`
  min-height: 45px;
  min-width: 40px;
  background-color: ${props => props.theme.colors.orange};
  border: 1px solid ${props => props.theme.colors.borderColor};
  box-shadow: ${props => props.theme.colors.boxShadowColor};
  box-sizing: border-box;
  color: ${props => props.theme.colors.baseColor};
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 5px;
  text-align: center;
  text-decoration: none;
`;
