import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'rsuite';
import { Nav, Dropdown } from 'rsuite';
import { Badge } from 'rsuite';

const NavBar = (props) => {
  console.log(props.drugEffects.length)

  return (
    <Nav>
      <Navbar style={{background: '#99ddff'}}>
      <Nav.Item> <NavLink to="/"><h3> Home </h3></NavLink> </Nav.Item>
      <Badge content={props.drugEffects.length > 0 && props.drugEffects.length < 99 ? props.drugEffects.length : null}>
       <Nav.Item> <NavLink to="/effects"><h3> Effects </h3></NavLink> </Nav.Item>
      </Badge>
      <Nav.Item> <NavLink to="/prescriptions"><h3>Prescriptions</h3></NavLink> </Nav.Item>
      <Nav.Item> <NavLink to="/file"><h3>Upload File</h3></NavLink> </Nav.Item>
      </Navbar>
    </Nav>  );
};

export default NavBar;