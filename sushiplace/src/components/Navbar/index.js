import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from './NavBarElements';

export const Navbar = ({toggle}) => {
    return (
        <>
           <Nav>
              <NavLink to="/"> Mr. Sushi Express</NavLink> 
              <NavIcon onClick={toggle}>
              <p>Menu</p>
              <Bars />
              </NavIcon>
           </Nav>
        </>
    );
};

export default Navbar;