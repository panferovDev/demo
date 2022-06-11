import React from 'react';
import {
  Collapse, DropdownItem, DropdownMenu, DropdownToggle,
  Nav, Navbar, NavbarBrand, NavbarText,
  NavItem, NavLink, UncontrolledDropdown,
} from 'reactstrap';

export default function MyNav() {
  return (
    <div>
      <Navbar
        color="dark"
        expand="md"
        dark
      >
        <NavbarBrand href="/">
          Leopards ❤️
        </NavbarBrand>
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink href="/components/">
                Components
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            Simple Text
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
