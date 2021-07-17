import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import '../Assets/styles/Navbar.css';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const changeNavBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeNavBackground);

  return (
    <>
      <Navbar expand="md" dark className={navbar ? 'fixed-top navbar active' : 'fixed-top navbar'}>
        <NavbarBrand href="#home" className="title-name">Fatkhul Amam</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto nav" navbar>
            <NavItem>
              <NavLink href="#work-experience" className="navLink">Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#project" className="navLink mr-5">Project</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact/" className="navLink">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Example;
