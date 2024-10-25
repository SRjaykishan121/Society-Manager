import React, { useState } from 'react';
import { Navbar, Nav, Dropdown, Button, InputGroup, FormControl, Container } from 'react-bootstrap';
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const [notifications, setNotifications] = useState([
    'New habit reminder',
    'Goal achieved!',
    'Don\'t forget to update your progress'
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const clearNotifications = () => {
    setNotifications([]);
    setShowNotifications(false);
  };

  return (
    <Navbar expand="sm" className="shadow-lg p-3 mb-5 bg-white rounded border-bottom">
      <Container fluid className='bg-white' >
        {/* Search Bar */}
        <Navbar.Brand className="w-20 d-sm-block">
          <InputGroup>
            <InputGroup.Text>
              <FiSearch />
            </InputGroup.Text>
            <FormControl
              className="border-start-0"
              placeholder="Search Here"
              aria-label="Search"
            />
          </InputGroup>
        </Navbar.Brand>

        {/* Toggle Button for Small Screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="d-flex align-items-center">
            {/* Notification Icon */}
            <Button
              variant=""
              className="position-relative me-3"
              onClick={toggleNotifications}
            >
              <img
                src="src/image/Notification.png"
                alt=""
                width="40"
                height="40"
                className="img-fluid"
              />
              {notifications.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {notifications.length}
                </span>
              )}
            </Button>

            {/* Notification Dropdown */}
            {showNotifications && (
              <div
                className="notification-dropdown position-absolute bg-white border shadow p-3"
                style={{ right: '60px', top: '60px', width: '300px', zIndex: 1000 }}
              >
                <div className="d-flex justify-content-between">
                  <h6 className="mb-0">Notifications</h6>
                  <Button variant="link" size="sm" onClick={clearNotifications}>
                    Clear All
                  </Button>
                </div>
                <ul className="list-unstyled mt-3">
                  {notifications.length > 0 ? (
                    notifications.map((notification, index) => (
                      <li key={index} className="border-bottom py-2">
                        {notification}
                      </li>
                    ))
                  ) : (
                    <li className="text-muted">No new notifications</li>
                  )}
                </ul>
              </div>
            )}

            {/* User Profile */}
            <Dropdown align="end">
              <Dropdown.Toggle
                variant="light"
                id="dropdown-basic"
                className="d-flex align-items-center"
              >
                <img
                  src="src/image/Avatar.png"
                  alt="User"
                  className=" me-2 img-fluid"
                  width="40"
                  height="40"
                />
                <div>
                  <span>Moni Roy</span>
                  <br />
                  <span className="text-muted" style={{ fontSize: '12px' }}>Admin</span>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
                <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
                <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
