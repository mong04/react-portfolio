import React, { Component } from 'react';
import { Navbar, NavItem, Footer, Parallax } from 'react-materialize';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Interests from './Interests';
import Contact from './Contact';
import phoenix from './images/parallax/phoenix.jpg';
import ide from './images/parallax/ide.jpg';
import git from './images/social/git.png';
import linkedin from './images/social/linkedin.png';
import so from './images/social/so.png';
import './App.css';

const soStyle = {
  height: '32px'
}
const liStyle = {
  color: '#E5E5E5'
}

class App extends Component {

  render() {
    return (
      <div>
        <div className="navbar-fixed z-depth-4">
          <Navbar className="nav black section" brand="Andrew Sanchez" fixed right>            
            <ul className="section table-of-contents">
              <NavItem href="#about">About Me</NavItem>
              <NavItem divider></NavItem>
              <NavItem href="#skills">Skills</NavItem>
              <NavItem divider></NavItem>
              <NavItem href="#portfolio">Portfolio</NavItem>
              <NavItem divider></NavItem>
              <NavItem href="#interests">Interests</NavItem>
              <NavItem divider></NavItem>
              <NavItem href="#contact">Contact</NavItem>
              <NavItem divider></NavItem>
              <NavItem href="#resume">Resume</NavItem>
              <NavItem divider></NavItem>
            </ul>
          </Navbar>
          </div>
        <Parallax className="phoenix" imageSrc={ phoenix }/>

        <About />

        <Skills />

        <Parallax className="ide-img" imageSrc={ ide }/>

        <Portfolio />
        
        <Interests />

        <Contact />

        <Footer copyrights="Made by Andrew Sanchez" className="grey darken-3 z-depth-4"
        links={
          <ul>
            <li><a style={ liStyle } target="_blank" rel="noopener noreferrer" href="https://github.com/mong04"><img src={ git } alt="GitHub"></img> GitHub</a></li>
            <li><a style={ liStyle } target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andrew-sanchez/"><img src={ linkedin } alt="LinkedIn"/> LinkedIn</a></li>
            <li><a style={ liStyle } target="_blank" rel="noopener noreferrer" href="http://stackexchange.com/users/10593431/a-sanchez"><img style={ soStyle } src={ so } alt="Stack Overflow"/> Stack Overflow</a></li>
          </ul>
        }
        >
        <h5 id="resume" className="section scrollspy">View my resume <a id="resume-link" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1Cu2nZuWDHLucWBDNb1IaI663U5xywcaIX_tTsn4PaCk/edit?usp=sharing">here</a></h5>
        <h5 className="white-text">Connect with me on: </h5>
        </Footer>
      </div>
    );
  }
}

export default App;
