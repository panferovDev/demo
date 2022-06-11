import React from 'react';
import {
  Collapse, DropdownItem, DropdownMenu, DropdownToggle,
  Nav, Navbar, NavbarBrand, NavbarText,
  NavItem, NavLink, UncontrolledDropdown,
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink as DomLink } from 'react-router-dom';
import { userLogOut } from '../../Redux/actions/userAction';

export default function MyNav() {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const logOutHAndler = () => {
    dispatch(userLogOut());
  };
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
            {!user.name
            && (
            <>
              <NavItem>
                <DomLink to="/signin">
                  signin
                </DomLink>
              </NavItem>
              <NavItem>
                <DomLink to="/signup">
                  signup
                </DomLink>
              </NavItem>
            </>
            )}
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
          <NavbarText onClick={logOutHAndler}>
            {user.name ? `Hi, ${user.name}` : 'Login please'}
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
