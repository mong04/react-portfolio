import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

class About extends Component {
    render() {
        return(
            <div id="bio">
                    <Row>
                        <Col s={12}>
                            <h4 className="center-align">
                                Hey!
                                <br/>
                                My name is Andrew and I'm a developer from Phoenix, Arizona. 
                                I'm a bit of a technophile and I have a passion for all things technology.
                            </h4>
                        </Col>
                    </Row>
                <p className="center-align flow-text">
                    I mostly work in <strong>web development</strong> using JavaScript and Node.js.
                    JavaScript has quickly become my favorite language to code in and it has enabled me to 
                    start learning other languages such as C# and Java. 
                </p>
            </div>
        )
    }
}

export default About;