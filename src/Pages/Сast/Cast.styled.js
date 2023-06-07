import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const ActorList = styled.li`
  width: 100px;
`;

export const ActorBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActorImage = styled.img`
  width: 100px;
`;

export const PlaceholderImage = styled.img`
  height: 150px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 400;
  color: white;
`;

export const Loading = styled.p`
  font-weight: 600;
  font-family: 'Rajdhani', sans-serif;
  color: #f44336;
`;
