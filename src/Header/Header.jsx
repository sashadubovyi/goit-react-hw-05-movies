import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';
import styled from '@emotion/styled';

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 20px;
  border: none;
  background: none;
  font-family: 'Rajdhani', sans-serif;

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

  &.active {
    color: #f44336;
  }
`;

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <StyledNavLink to={'/'}>Home</StyledNavLink>
        <StyledNavLink to={'/movies'}>Movies</StyledNavLink>
      </nav>
    </header>
  );
};
export default Header;
