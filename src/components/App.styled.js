import styled from 'styled-components';

export const Body = styled.div`
  background: radial-gradient(
    circle at 24.1% 68.8%,
    rgb(50, 50, 50) 0%,
    rgb(0, 0, 0) 99.4%
  );
  margin-left: 8%;
  margin-right: 8%;
  overflow-x: hidden;
`;

export const Main = styled.main`
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #010101;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const Loading = styled.p`
  color: #f44336;
`;
