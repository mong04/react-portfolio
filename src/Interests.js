import React, { Component } from 'react';
import { Row, Container, img } from 'react-materialize';
import js from './images/interests/js.jpg';
import future from './images/interests/future.jpg';
import music from './images/interests/music.jpg';
import travel from './images/interests/travel.jpg';
import workout from './images/interests/workout.jpg';
import lowcarb from './images/interests/lowcarb.jpg';

class Interests extends Component {
    render() {
        return(
            <div id="interests" className="section scrollspy">
                <Container>
                    <br/>
                    <h2>Interests</h2>
                    <Row>
                        <div className="slider">
                            <ul className="slides">
                                <li>
                                    <img src={ js } alt="JavaScript"/>
                                    <div className="caption center-align">
                                        <h2 className="caption-text">JavaScript</h2>
                                    </div>
                                </li>
                                <li>
                                    <img src={ future } alt="Future Technology"/>
                                    <div className="caption left-align">
                                        <h2 className="caption-text">Future Technology</h2>
                                    </div>
                                </li>
                                <li>
                                    <img src={ music } alt="Music"/>
                                    <div className="caption center-align">
                                        <h2 className="caption-text">Music</h2>
                                    </div>
                                </li>
                                <li>
                                    <img src={ travel } alt="Travelling"/>
                                    <div className="caption right-align">
                                        <h2 className="caption-text">Travelling</h2>
                                    </div>
                                </li>
                                <li>
                                    <img src={ workout } alt="Exercise"/>
                                    <div className="caption center-align">
                                        <h2 className="caption-text">Exercise</h2>
                                    </div>
                                </li>
                                <li>
                                    <img src={ lowcarb } alt="Ketogenic Diet"/>
                                    <div className="caption left-align">
                                        <h2 className="caption-text">Ketogenic Diet</h2>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Interests;