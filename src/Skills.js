import React, { Component }from 'react';
import { Row, Col, Container, Card } from 'react-materialize';
import js from './images/skills/js.svg';
import nodejs from './images/skills/nodejs.svg';
import react from './images/skills/react.svg';
import git from './images/skills/git.svg';
import mongo from './images/skills/mongo.svg';
import mysql from './images/skills/mysql.svg';
import bootstrap from './images/skills/bootstrap.svg';
import w3c from './images/skills/w3c.svg';
import wordpress from './images/skills/wordpress.svg';

const nodeStyle = {
    marginTop: '19.3%',
    marginBottom: '19.3%'
}
const gitStyle = {
    marginTop: '28.8%',
    marginBottom: '28.8%'
}
const mongoStyle = {
    marginTop: '35.7%',
    marginBottom: '35.7%'
}
const sqlStyle = {
    marginTop: '15.3%',
    marginBottom: '15.3%'
}
const w3cStyle = {
    marginTop: '17.6%',
    marginBottom: '17.6%'
}


class Skills extends Component {
    render() {
        return(
            <div id="skills" className="section scrollspy">
                <Container>
                    <br/>
                    <h2>Skills</h2>
                    <Row>
                        <ul>
                            <li><Col s={4}><Card className="skill-card z-depth-4 tooltipped" data-position="top" data-delay="50" data-tooltip="JavaScript"><img className="responsive-img" src={ js } alt="JavaScript"/></Card></Col></li>
                            <li><Col s={4}><Card className="skill-card z-depth-4 tooltipped" data-position="top" data-delay="50" data-tooltip="Node.js"><div><img style={ nodeStyle } className="responsive-img" src={ nodejs } alt="Node.js"/></div></Card></Col></li>
                            <li><Col s={4}><Card className="skill-card z-depth-4 tooltipped" data-position="top" data-delay="50" data-tooltip="React"><img className="responsive-img" src={ react } alt="React"/></Card></Col></li>
                            <li><Col s={4}><Card className="skill-card z-depth-4 tooltipped" data-position="top" data-delay="50" data-tooltip="Git"><img style={ gitStyle } className="responsive-img" src={ git } alt="Git"/></Card></Col></li>
                            <li><Col s={4}><Card className="skill-card z-depth-4 tooltipped" data-position="top" data-delay="50" data-tooltip="MongoDB"><img style={ mongoStyle } className="responsive-img" src={ mongo } alt="MongoDB"/></Card></Col></li>
                            <li><Col s={4}><Card className="skill-card z-depth-4 tooltipped" data-position="top" data-delay="50" data-tooltip="MySQL"><img style={ sqlStyle } className="responsive-img" src={ mysql } alt="MySQL"/></Card></Col></li>
                            <li><Col s={4}><Card className="skill-card z-depth-4 tooltipped" data-position="top" data-delay="50" data-tooltip="CSS3 & HTML5"><img style={ w3cStyle } className="responsive-img" src={ w3c } alt="CSS3 & HTML5"/></Card></Col></li>
                            <li><Col s={4}><Card className="skill-card z-depth-4 tooltipped" data-position="top" data-delay="50" data-tooltip="Bootstrap"><img className="responsive-img" src={ bootstrap } alt="Bootstrap"/></Card></Col></li>
                            <li><Col s={4}><Card className="skill-card z-depth-4 tooltipped" data-position="top" data-delay="50" data-tooltip="WordPress"><img className="responsive-img" src={ wordpress } alt="WordPress"/></Card></Col></li>
                        </ul>
                    </Row>
                    <br/>
                </Container>
            </div>
        )
    }
}

export default Skills;