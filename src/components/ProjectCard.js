import React from "react";
import { Col } from "react-bootstrap";
import 'animate.css'


const ProjectCard = ({ title, description, imgUrl, link }) => {
    return (

        <Col sm={6} md={4}>
                    <div>
                        <div className="proj-imgbx">
                            <img src={imgUrl} alt="img" target="_blank"/>
                            <div className="proj-txtx">
                                <h4>{title}</h4>
                                <span>{description}</span>
                                <a href={link} target="_blank">
                                    <p className="link">Click to Visit project </p>
                                </a>
                            </div>
                        </div>
                    </div>
        </Col>
    )
}

export default ProjectCard