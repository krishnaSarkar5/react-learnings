import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Logout} from './Logout';
import {LoginContext} from '../App'
import {  useNavigate } from 'react-router-dom';
import { getUserData, getUserLoggedInData } from '../services/UserService';

const AppNavbar = () => {
   const {isLoggedIn,setIsLoggedIn} = useContext(LoginContext);
   const [userData,setUserData] = useState()


   useEffect(()=>{
   const response = getUserLoggedInData();
   const data =  getUserData(response?.email)
   setUserData(data)
   },[])

 const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            {/* <Nav.Text>ABC</Nav.Text> */}
            <Nav.Link>{userData?.firstName} {userData?.lastName}</Nav.Link>
            <Nav.Link onClick={()=>{
              Logout(isLoggedIn,setIsLoggedIn)
            navigate("/login")
            }}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  )
}

export default AppNavbar