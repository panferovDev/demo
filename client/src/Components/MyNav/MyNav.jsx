import React from 'react';
import {
  Collapse, DropdownItem, DropdownMenu, DropdownToggle,
  Nav, Navbar, NavbarBrand, NavbarText,
  NavItem, NavLink, UncontrolledDropdown,
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink as DomLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { userLogOut } from '../../Redux/actions/userAction';

export default function MyNav() {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const logOutHAndler = () => {
    dispatch(userLogOut());
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
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
            <NavItem className="nav-link">
              <DomLink to="/words">
                words
              </DomLink>
            </NavItem>
            {!user.name
            && (
            <>
              <NavItem className="nav-link">
                <DomLink to="/signin">
                  signin
                </DomLink>
              </NavItem>
              <NavItem className="nav-link">
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
              <DropdownMenu end>
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
    </motion.div>
  );
}
