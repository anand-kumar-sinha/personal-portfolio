import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Row, Container, Col } from "react-bootstrap";
import meter1 from '../assests/img/meter1.svg'
import meter2 from '../assests/img/meter2.svg'
import meter3 from '../assests/img/meter3.svg'
import colorSharp from '../assests/img/color-sharp.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';



const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__rubberBand" : ""}>
                                        <h2>Skills</h2>
                                        <p>Intermediate Level in C language, Web Devlopment, React JS, C++ language and Designing</p>
                                    </div>}
                            </TrackVisibility>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <TrackVisibility>
                                    {({ isVisible }) =>
                                        <div className={isVisible ? "animate__animated animate__backInRight" : "animate__animated animate__backOutLeft"}>
                                            <div className="item">
                                                <img src={meter1} alt="image" />
                                                <h5>Web Development</h5>
                                            </div>
                                        </div>}
                                </TrackVisibility>
                                <TrackVisibility>
                                    {({ isVisible }) =>
                                        <div className={isVisible ? "animate__animated animate__backInUp" : "animate__animated animate__backOutDown"}>
                                            <div className="item">
                                                <img src={meter2} alt="image" />
                                                <h5>React JS</h5>
                                            </div>
                                        </div>}
                                </TrackVisibility>
                                <TrackVisibility>
                                    {({ isVisible }) =>
                                        <div className={isVisible ? "animate__animated animate__backInLeft" : "animate__animated animate__backInRight"}>
                                            <div className="item">
                                                <img src={meter3} alt="image" />
                                                <h5>C language</h5>
                                            </div>
                                        </div>}
                                </TrackVisibility>

                                <div className="item">
                                    <img src={meter2} alt="image" />
                                    <h5>C++ language</h5>
                                </div>


                                <div className="item">
                                    <img src={meter3} alt="image" />
                                    <h5>Designing</h5>
                                </div>

                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt="img" className="background-image-left" />
        </section>
    )
}

export default Skills;