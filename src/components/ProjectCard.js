import React from "react";
import { Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import 'animate.css'


const ProjectCard = ({ title, description, imgUrl, link }) => {
    return (

        <Col sm={6} md={4}>
            <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeInLeft" : "animate__animated animate__fadeOutLeft"}>
                        <div className="proj-imgbx">
                            <img src={imgUrl} alt="img" target="_blank"/>
                            <div className="proj-txtx">
                                <h4>{title}</h4>
                                <span>{description}</span>
                                <a href={link}>
                                    <p className="link">Click to Visit project </p>
                                </a>
                            </div>
                        </div>
                    </div>}
            </TrackVisibility>
        </Col>
    )
}

export default ProjectCard