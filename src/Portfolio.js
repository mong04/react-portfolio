import React, { Component } from 'react';
import { Card, CardTitle, Row, Col, Container } from 'react-materialize';
import keto from './images/portfolio/keto.jpg';
import movies from './images/portfolio/movies.jpg';
import tech from './images/portfolio/tech.jpg';
import hangman from './images/portfolio/hangman.jpg';
import burger from './images/portfolio/burger.jpg';

class Portfolio extends Component {
    render() {
        return (
            <div id="portfolio" className="section scrollspy">
                <Container>
                    <br/>
                    <h2>Portfolio</h2>
                    <Row>
                        <ul>
                            <li><Col s={12} m={6} l={4}>
                                <Card className="z-depth-4" header={<CardTitle reveal image={ keto } waves='light'/>}
                                    title='Keto System'
                                    reveal={<p>
                                            Web-application to assist those on or interested in a Ketogenic diet. 
                                            Provides diet information, account creation, nutrition calculation and a profile to view user information.
                                        </p>}>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://kdiet.herokuapp.com/home">App Link</a></p>
                                </Card></Col>
                            </li>
                            <li><Col s={12} m={6} l={4}>
                                <Card className="z-depth-4" header={<CardTitle reveal image={ movies } waves='light'/>}
                                    title='Movie Buff Hub'
                                    reveal={<p>
                                            Web app that allows users to search for movies, tv-shows, actors/actresses and get information about the subject.
                                        </p>}>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://mong04.github.io/Movie-Buff-Hub/">App Link</a></p>
                                </Card></Col>
                            </li>
                            <li><Col s={12} m={6} l={4}>
                                <Card className="z-depth-4" header={<CardTitle reveal image={ tech } waves='light'/>}
                                    title='TechNews'
                                    reveal={<p>
                                            An application that scrapes news from TechCrunch then allows the user to read and save articles.
                                        </p>}>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://technews-scraper.herokuapp.com/">App Link</a></p>
                                </Card></Col>
                            </li>
                            <li><Col s={12} m={6} l={4}>
                                <Card className="z-depth-4" header={<CardTitle reveal image={ hangman } waves='light'/>}
                                    title='Hangman'
                                    reveal={<p>
                                            A hangman game themed around Minecraft. It keeps track of letters guessed and how many guess the user has left.
                                        </p>}>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://mong04.github.io/Hangman-Game/">App Link</a></p>
                                </Card></Col>
                            </li>
                            <li><Col s={12} m={6} l={4}>
                                <Card className="z-depth-4" header={<CardTitle reveal image={ burger } waves='light'/>}
                                    title='Eat-da-Burger'
                                    reveal={<p>
                                            A web app that allows users to save "burgers" to the database and then "consume" them.
                                        </p>}>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://ancient-fjord-81201.herokuapp.com/">App Link</a></p>
                                </Card></Col>
                            </li>
                        </ul>
                    </Row>
                    <br/>
                </Container>
            </div>
        )
    }
}

export default Portfolio;