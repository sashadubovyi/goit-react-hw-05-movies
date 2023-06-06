import styled from 'styled-components';

export const DetailsBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const ListCast = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemCast = styled.li`
  display: flex;
  gap: 20px;
`;

export const Poster = styled.img`
  min-height: 600px;
  min-width: 400px;
`;

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LinkBox = styled.li`
  display: flex;
  gap: 20px;
`;

export const Title = styled.h3`
  font-family: 'Rajdhani', sans-serif;
  font-weight: 800;
  font-size: 40px;
  color: white;
`;

export const SpanTitle = styled.span`
  color: #f44336;
  letter-spacing: 2px;
  margin-bottom: 30px;
`;

export const BoldText = styled.h3`
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  color: white;
`;

export const Text = styled.h3`
  font-family: 'Rajdhani', sans-serif;
  font-weight: 400;
  color: white;
`;

export const GoBackBtn = styled.button`
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
