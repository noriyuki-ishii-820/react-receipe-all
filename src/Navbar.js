import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FaTwitter, FaGithub } from "react-icons/fa";

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar light className="navbar">
        <NavbarBrand className="mr-auto">Recipe Searcher</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem className="toggleBar">
              <NavLink href="https://twitter.com/nishiiSydDev"><FaTwitter /> Twitter</NavLink>
            </NavItem>
            <NavItem className="toggleBar">
              <NavLink href="https://github.com/noriyuki-ishii-820/react-receipe-all"><FaGithub /> GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;