import styled from 'styled-components';

export const Title = styled.h1`
  color: white;
  letter-spacing: 2px;
  margin-bottom: 30px;
  animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;

  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ListTrending = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding-bottom: 50px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const SpanTitle = styled.span`
  color: #f44336;
  letter-spacing: 2px;
  margin-bottom: 30px;
`;

export const Box = styled.div`
  width: 140px;
`;

export const PrevPoster = styled.img`
  height: 200px;
  width: 140px;

  &:hover {
    outline: 2px solid #f44336;
    transition: 0.15s;
  }
`;
