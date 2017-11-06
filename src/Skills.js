import React, { Component }from 'react';
import { Row, Col, Container, Card } from 'react-materialize';
import js from './images/js.svg';
import nodejs from './images/nodejs.svg';
import react from './images/react.svg';
import git from './images/git.svg';
import mongo from './images/mongo.svg';
import mysql from './images/mysql.svg';
import bootstrap from './images/bootstrap.svg';
import w3c from './images/w3c.svg';
import wordpress from './images/wordpress.svg';

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
            <div id="skills">
                <Container>
                    <br/>
                    <h2>Skills</h2>
                    <Row>
                        <Col s={4}><Card className="skill-card z-depth-4"><img className="responsive-img" src={ js } alt="JavaScript"/></Card></Col>
                        <Col s={4}><Card className="skill-card z-depth-4"><div><img style={ nodeStyle } className="responsive-img" src={ nodejs } alt="Node.js"/></div></Card></Col>
                        <Col s={4}><Card className="skill-card z-depth-4"><img className="responsive-img" src={ react } alt="React"/></Card></Col>
                        <Col s={4}><Card className="skill-card z-depth-4"><img style={ gitStyle } className="responsive-img" src={ git } alt="Git"/></Card></Col>
                        <Col s={4}><Card className="skill-card z-depth-4"><img style={ mongoStyle } className="responsive-img" src={ mongo } alt="MongoDB"/></Card></Col>
                        <Col s={4}><Card className="skill-card z-depth-4"><img style={ sqlStyle } className="responsive-img" src={ mysql } alt="MySQL"/></Card></Col>
                        <Col s={4}><Card className="skill-card z-depth-4"><img style={ w3cStyle } className="responsive-img" src={ w3c } alt="CSS3 & HTML5"/></Card></Col>
                        <Col s={4}><Card className="skill-card z-depth-4"><img className="responsive-img" src={ bootstrap } alt="Bootstrap"/></Card></Col>
                        <Col s={4}><Card className="skill-card z-depth-4"><img className="responsive-img" src={ wordpress } alt="WordPress"/></Card></Col>
                    </Row>
                    <br/>
                </Container>
            </div>
        )
    }
}

export default Skills;