import React from "react";
import projImg1 from "../assests/img/project-img1.png"
import projImg2 from "../assests/img/project-img2.png"
import projImg3 from "../assests/img/project-img3.png"
import projImg4 from "../assests/img/project-img4.png"
import projImg5 from "../assests/img/project-img5.png"
import projImg6 from "../assests/img/project-img6.png"
import projImg7 from "../assests/img/project-img7.png"
import projimg8 from '../assests/img/project-img8.png'
import { Container, Row, Nav, Col, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assests/img/color-sharp2.png"
import TrackVisibility from 'react-on-screen';
import 'animate.css'

const Projects = () => {

    const projects = [
        
        {
            title: "Loot - bazar",
            description: "E-commerce MERN stack",
            imgUrl: projimg8,
            link: "https://lootbazarfrontend.vercel.app/",
        },
        {
            title: "Hello-Engg",
            description: "Important Notes, Small projects and Programms",
            imgUrl: projImg1,
            link: "https://anandkumarpatel1.github.io/Hello-Engg/",
        },
        {
            title: "Digital Watch",
            description: "Digital Watch with accurate Time",
            imgUrl: projImg2,
            link: "https://anandkumarpatel1.github.io/Hello-Engg/digitalwatch.html",
        },
        {
            title: "Music Player",
            description: "Listen Music",
            imgUrl: projImg3,
            link: "https://anandkumarpatel1.github.io/Hello-Engg/spotify.html",
        },
        {
            title: "Text-Utilits",
            description: "Here you can convert into upercase, lowercase, count word and count sentence",
            imgUrl: projImg4,
            link: "http://textutilitis.rf.gd/?i=1",
        },

        {
            title: "News Mania",
            description: "Read latest news",
            imgUrl: projImg5,
            link: "",
        },
        {
            title: "Hello-Notes",
            description: "Here you can upload note any time privetly and read anywhere",
            imgUrl: projImg6,
            link: "https://hello-notebook-2zkl.vercel.app/login",
        },
        {
            title: "personal-portfolio",
            description: "personal-portfolio",
            imgUrl: projImg7,
            link: "https://hello-notebook-2zkl.vercel.app/login",
        }
    ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <h2>Projects</h2>
                                    <p>Don't try any thing hard to exterminate darkness out of the room, Just turn on the Light.
                                    </p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >
                                        Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Nothing to Show</Tab.Pane>
                                <Tab.Pane eventKey="third">Nothing to Show</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} alt="" className="background-image-right" />
        </section>
    )
}

export default Projects;