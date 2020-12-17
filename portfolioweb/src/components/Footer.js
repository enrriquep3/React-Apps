import React from 'react';
import SocialFollow from './SocialMedia';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './styles.css';

function Footer() {
return (
    <footer className="footer">
        <Container fluid={true}>
        
            <Row className="border-top justify-content-between p-3">
           <Col className="p-0" md={3} sm={12}>
           </Col>
           <SocialFollow  className="social"/>
           <Col className="p-0 d-flex justify-content-end" md={3}>
               Copyright...
           </Col>
            </Row>
        </Container>

    </footer>
);


}

export default Footer;