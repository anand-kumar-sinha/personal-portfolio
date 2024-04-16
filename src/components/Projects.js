import React from "react";
import projImg1 from "../assests/img/project-img1.png";
import projImg2 from "../assests/img/project-img2.png";
import projImg3 from "../assests/img/project-img3.png";
import projImg4 from "../assests/img/project-img4.png";
import projImg6 from "../assests/img/project-img6.png";
import projImg7 from "../assests/img/project-img7.png";
import projimg8 from "../assests/img/project-img8.png";
import android1 from "../assests/img/android-1.jpg";
import android2 from "../assests/img/android-2.jpg";
import android3 from "../assests/img/android-3.jpg";
import android4 from "../assests/img/android-4.jpg";
import android5 from "../assests/img/android-5.jpg";
import website1 from '../assests/img/website-1.png'
import website2 from '../assests/img/website-2.png'
import website3 from '../assests/img/website-3.png'
import website4 from '../assests/img/website-4.png'
import { Container, Row, Nav, Col, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assests/img/color-sharp2.png";
import "animate.css";

const Projects = () => {
  const projects = [
    {
      title: "Twitter - Clone",
      description: "Twitter clone ",
      imgUrl: projimg8,
      link: "https://twitter-ands.vercel.app/",
    },
    {
      title: "Attendo-College",
      description: "Attendance management system",
      imgUrl: projImg2,
      link: "https://attendocollege.vercel.app/",
    },
    {
      title: "Ands-Blog",
      description: "Blog Media",
      imgUrl: projImg1,
      link: "https://ands-blog.vercel.app/",
    },
    {
      title: "Edu-metrics",
      description: "Marks management system",
      imgUrl: projImg3,
      link: "https://edumetrics.vercel.app/",
    },
    {
      title: "Text-Utilits",
      description:
        "Here you can convert into upercase, lowercase, count word and count sentence",
      imgUrl: projImg4,
      link: "http://textutilitis.rf.gd/?i=1",
    },
    {
      title: "YouTube-clone",
      description: "youtube-clone here you can play video",
      imgUrl: projImg6,
      link: "https://youtube-clone-byanandkumar.vercel.app/",
    },
    {
      title: "personal-portfolio",
      description: "personal-portfolio",
      imgUrl: projImg7,
      link: "https://anandkumar.vercel.app/",
    },
  ];
  const Andprojects = [
    {
      title: "Petu-bazar",
      description: "Recipe application",
      imgUrl: android1,
      link: "https://drive.google.com/file/d/1yZSQbTuGasZf4KagDq11dqCQynuqwI0I/view?usp=sharing",
    },
    {
      title: "Pub-Post",
      description: "public post",
      imgUrl: android2,
      link: "https://drive.google.com/file/d/1wxEjGzcOJO9KRhHbcE7N84rsG7Cj692s/view?usp=sharing",
    },
    {
      title: "Weather App",
      description: "Weater report",
      imgUrl: android3,
      link: "https://drive.google.com/file/d/1sXRMggqEs6Lcw9tO2ul6GoSVy4GvhhAY/view?usp=sharing",
    },
    {
      title: "Calculator",
      description: "Calculator",
      imgUrl: android4,
      link: "https://drive.google.com/file/d/1YbauIrXnzQg1M_DKcIWoqT3gpwVfGKGg/view?usp=sharing",
    },
    {
      title: "Weather",
      description: "Weater report",
      imgUrl: android5,
      link: "https://drive.google.com/file/d/1p8oo-cROzzMO2A_4C-Na7uhnW5hraF8s/view?usp=sharing",
    },
  ];
  const webprojects = [
    {
      title: "Hello-Engg",
      description: "College Notes",
      imgUrl: website1,
      link: "https://anand-kumar-sinha.github.io/Hello-Engg/index.html",
    },
    {
      title: "Password-Generator",
      description: "Random password generator",
      imgUrl: website2,
      link: "https://password-generator-loop.vercel.app/",
    },
    {
      title: "Music Player",
      description: "Static music player",
      imgUrl: website3,
      link: "https://anand-kumar-sinha.github.io/Hello-Engg/spotify.html",
    },
    {
      title: "Digital Clock",
      description: "digital clock",
      imgUrl: website4,
      link: "https://anand-kumar-sinha.github.io/Hello-Engg/digitalwatch.html",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>
                Don't try any thing hard to exterminate darkness out of the
                room, Just turn on the Light.
              </p>
            </div>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Web Apps</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Android Apps</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Web sites</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {Andprojects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Row>
                    {webprojects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  );
};

export default Projects;
