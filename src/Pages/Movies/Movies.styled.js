import styled from 'styled-components';

export const Title = styled.h1`
  color: white;
  letter-spacing: 2px;
  margin-bottom: 30px;
`;

export const SpanTitle = styled.span`
  color: #f44336;
  letter-spacing: 2px;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
`;

export const Input = styled.input`
  border-top: 2px solid #f44336;
  border-bottom: 2px solid #f44336;
  border-left: none;
  border-right: none;
  outline: none;
  background-color: transparent;
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-size: 20px;
  width: 300px;
  padding-left: 10px;
`;

export const Button = styled.button`
  color: white;
  text-decoration: none;
  font-size: 20px;
  border: none;
  background: none;
  font-family: 'Rajdhani', sans-serif;
  cursor: pointer;

  &::before {
    margin-left: auto;
  }

  &::after {
    content: '';
    width: 0%;
    height: 2px;
    background: #f44336;
    display: block;
    transition: 0.5s;
  }

  &::before {
    content: '';
    width: 0%;
    height: 2px;
    background: #f44336;
    display: block;
    transition: 0.5s;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover::before {
    width: 100%;
  }
`;

export const NoneText = styled.p`
  margin-top: 10px;
  font-size: 25px;
  color: white;
`;

export const SearchList = styled.ul`
  margin-top: 30px;
`;
