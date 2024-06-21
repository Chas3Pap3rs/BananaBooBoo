import React from 'react';
import ImageHover from './ImageHover';
import { Navbar, Nav, Dropdown, DropdownButton } from 'react-bootstrap';


function Header({ isSidebarCollapsed }) {
  const navigationItems = [
    // ... your navigation items
  ];

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">
          <ImageHover />  {/* Your logo component */}
          BananaBooBoo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Only show navigation items if sidebar is collapsed on small screens */}
          {isSidebarCollapsed && (
            <Nav className="me-auto">
              <DropdownButton id="dropdown-basic-button" title="Sidebar">
                {navigationItems.map((item) => (
                  <Dropdown.Item key={item.key}>{item.label}</Dropdown.Item>
                ))}
              </DropdownButton>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
