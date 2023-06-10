import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from 'typewriter-effect';
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assests/img/header-img.svg';



const Banner = () => {
    return (

        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>Hey I'am Anand Kumar
                        </h1>

                        <h2>
                            <Typewriter
                                options={{
                                    strings: ['MERN stack developer', 'Programmer', 'Backend Devloper'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h2>
                        <p>Great web design without functionality is like a sports car with no engine.</p>

                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section >

    )
}

export default Banner;