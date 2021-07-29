import React from 'react';
import '../../css/main.css';
import { Container,Row,Col } from 'react-bootstrap';
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div>
            <Container>
                <Row>
                  <Col md={12}>
                    <ul className="menu">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/About">About Me</Link></li>
                      <li><Link to="/What I do">What I do</Link></li>
                      <li><Link to="/Resume">Resume</Link></li>
                      <li><Link to="/Portfolio">Portfolio</Link></li>
                      <li><Link to="/Contact">Contact Me</Link></li>

                   
                   </ul>
            


                    </Col>
                </Row>
            </Container>
        </div>
    )
}
