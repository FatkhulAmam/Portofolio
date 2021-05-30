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

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="shadow-sm bg-primary">
      <Navbar light expand="md" className="container navbar-dark">
        <NavbarBrand href="/">Fatkhul Amam</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="/Portofolio/" className="active">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/FatkhulAmam/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Portofolio/">Project</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Portofolio/">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
