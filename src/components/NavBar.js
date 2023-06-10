import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navLogo from "../assests/img/navLogo.png";
import NavIcon1 from "../assests/img/nav-icon1.svg";
import NavIcon2 from "../assests/img/nav-icon2.svg";
import NavIcon3 from "../assests/img/nav-icon3.svg";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={navLogo} alt="logo" className="nav-img-my" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={
                                activeLink === "home" ? "active navbar-link" : "navbar-link"
                            }
                            onClick={() => setActiveLink("home")}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={
                                activeLink === "skills" ? "active navbar-link" : "navbar-link"
                            }
                            onClick={() => setActiveLink("skills")}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={
                                activeLink === "projects" ? "active navbar-link" : "navbar-link"
                            }
                            onClick={() => setActiveLink("projects")}
                        >
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/uchiha-obito/?_l=en_US" target="_blank">
                                <img src={NavIcon1} alt=""></img>
                            </a>
                        </div>
                        <div className="social-icon">
                            <a href="https://www.facebook.com/mrconqureror/" target="_blank">
                                <img src={NavIcon2} alt=""></img>
                            </a>
                        </div>
                        <div className="social-icon"> 
                            <a href="https://www.instagram.com/babu_.patel_._/" target="_blank">
                                <img src={NavIcon3} alt=""></img>
                            </a>
                        </div>
                        <Nav.Link
                            href="#connect">
                            <button className="vvd" onClick={() => console.log("connect")}>
                                {" "}
                                Let's Connect
                            </button>
                        </Nav.Link>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
