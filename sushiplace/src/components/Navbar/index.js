import React from 'react'
import { Nav, NavLink } from './NavBarElements';

export const Navbar = () => {
    return (
        <>
           <Nav>
              <NavLink to="/">Sushi</NavLink> 
           </Nav>
        </>
    );
};

export default Navbar;