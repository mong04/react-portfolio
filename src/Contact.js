import React, { Component } from 'react';
import { Container, Input, Button } from 'react-materialize';

class Contact extends Component {
    render() {
        return(
            <div id="contact" className="section scrollspy">
                <Container>
                    <br/>
                    <h2>Contact</h2>
                    <br/>
                    <form action="mailto:andrewsanchez10@live.com" id="contact-form" method="post" encType="text/plain">
                        <Input name="name" s={12} label="Name:" required="required"/>
                        <Input name="email" pattern="([\w\d_\-\.]+)@([\w]+)\.([\w]{2,5})" type="email" s={12} label="Email:" required="required"/>
                        <Input name="message" type="text" s={12} label="Message:" required="required"/>
                    <Button className="submit-btn" type="submit">Submit</Button>
                  </form>
                  <br/>
                </Container> 
            </div>
        )
    }
}

export default Contact;