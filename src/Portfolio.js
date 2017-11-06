import React, { Component } from 'react';
import { Card, CardTitle, Row, Col, Container } from 'react-materialize';
import keto from './images/portfolio/keto.jpg';
import movies from './images/portfolio/movies.jpg';
import tech from './images/portfolio/tech.jpg';

class Portfolio extends Component {
    render() {
        return (
            <div id="portfolio" className="section scrollspy">
                <Container>
                    <br/>
                    <h2>Portfolio</h2>
                    <Row>
                        <ul>
                            <li><Col s={6}>
                                <Card header={<CardTitle reveal image={ keto } waves='light'/>}
                                    title='Keto System'
                                    reveal={<p>information</p>}>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://kdiet.herokuapp.com/home">App Link</a></p>
                                </Card></Col>
                            </li>
                            <li><Col s={6}>
                                <Card header={<CardTitle reveal image={ movies } waves='light'/>}
                                    title='Movie Buff Hub'
                                    reveal={<p>information</p>}>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://mong04.github.io/Movie-Buff-Hub/">App Link</a></p>
                                </Card></Col>
                            </li>
                            <li><Col s={6}>
                                <Card header={<CardTitle reveal image={ tech } waves='light'/>}
                                    title='TechNews'
                                    reveal={<p>information</p>}>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://technews-scraper.herokuapp.com/">App Link</a></p>
                                </Card></Col>
                            </li>
                            <li><Col s={6}>
                                <Card header={<CardTitle reveal image={ keto } waves='light'/>}
                                    title='title'
                                    reveal={<p>information</p>}>
                                    <p><a target="_blank" rel="noopener noreferrer" href="#">This is a link</a></p>
                                </Card></Col>
                            </li>
                            <li><Col s={6}>
                                <Card header={<CardTitle reveal image={ keto } waves='light'/>}
                                    title='title'
                                    reveal={<p>information</p>}>
                                    <p><a target="_blank" rel="noopener noreferrer" href="#">This is a link</a></p>
                                </Card></Col>
                        </li>
                        </ul>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Portfolio;