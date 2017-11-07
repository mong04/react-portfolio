import React, { Component } from 'react';
import { Row, Col, Container } from 'react-materialize';
import js from './images/interests/js.jpg';
import future from './images/interests/future.jpg';
import music from './images/interests/music.jpg';

class Interests extends Component {
    render() {
        return(
            <div id="interests" className="section scrollspy">
                <Container>
                    <br/>
                    <h2>Interests</h2>
                    <Row>
                        <ul>
                            <li>
                                <Col className="interests-pic" s={12} m={6}>
                                    <img className="materialboxed responsive-img" data-caption="JavaScript" src={ js }/>
                                </Col>
                            </li>
                            <li>
                                <Col className="interests-pic" s={12} m={6}>
                                    <img className="materialboxed responsive-img" data-caption="Future Technology" src={ future }/>
                                </Col>
                            </li>
                            <li>
                                <Col className="interests-pic" s={12} m={6}>
                                    <img className="materialboxed responsive-img" data-caption="Music" src={ music }/>
                                </Col>
                            </li>
                            <li>
                                <Col className="interests-pic" s={12} m={6}>
                                    <img className="materialboxed responsive-img" data-caption="caption" src="https://lorempixel.com/800/400/nature/4"/>
                                </Col>
                            </li>
                            <li>
                                <Col className="interests-pic" s={12} m={6}>
                                    <img className="materialboxed responsive-img" data-caption="caption" src="https://lorempixel.com/800/400/nature/4"/>
                                </Col>
                            </li>
                        </ul>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Interests;