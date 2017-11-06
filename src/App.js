import React, { Component } from 'react';
import { Navbar, NavItem, Container, Parallax } from 'react-materialize';
import About from './About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <Navbar className="nav black" brand="Andrew Sanchez" fixed right>            
            <NavItem>About Me</NavItem>
            <NavItem divider></NavItem>
            <NavItem>Skills</NavItem>
            <NavItem divider></NavItem>
            <NavItem>Portfolio</NavItem>
            <NavItem divider></NavItem>
            <NavItem>Interests</NavItem>
            <NavItem divider></NavItem>
            <NavItem>Contact</NavItem>
            <NavItem divider></NavItem>
            <NavItem>Resume</NavItem>
            <NavItem divider></NavItem>
          </Navbar>
          </div>
        <Parallax imageSrc="https://media.azpm.org/master/image/2017/2/24/hero/downtown-phoeni.jpg"/>

        <Container>
          <About />
        </Container>
      </div>
    );
  }
}

export default App;
