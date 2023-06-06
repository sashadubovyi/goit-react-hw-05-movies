import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';
import styled from '@emotion/styled';

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  font-size: 10px;
  border: 1px solid grey;

  &.active {
    outline: 2px solid rgb(78, 78, 78);
  }
`;

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <StyledNavLink to={'/'}>Home</StyledNavLink>
        <StyledNavLink to={'/movies'}>Movies</StyledNavLink>
        {/* <StyledNavLink to={'/movies/:movieId'}>MovieDetails</StyledNavLink> */}
        {/* <StyledNavLink to={'/movies/:movieId/cast'}>Cast</StyledNavLink> */}
        {/* <StyledNavLink to={'/movies/:movieId/reviews'}>Reviews</StyledNavLink> */}
      </nav>
    </header>
  );
};
export default Header;
