import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from './NavBarElements';

export const Navbar = () => {
    return (
        <>
           <Nav>
              <NavLink to="/">Sushi</NavLink> 
              <NavIcon>
              <p>Menu</p>
              <Bars />
              </NavIcon>
           </Nav>
        </>
    );
};

export default Navbar;