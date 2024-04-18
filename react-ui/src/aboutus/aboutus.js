import Name from "../images/Name.png";
import Team from "../images/Team.jpg";
import React, { useState, useEffect } from "react";
import { Image, Row, Col, Accordion, Nav, Navbar, ListGroup, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";


const AboutUs = () => {

    const location = useLocation();
    const [auth, setAuth] = useState("");

    useEffect(() => {
        setAuth(location?.state?.token);
    }, [location]);

    return (
        <div className="backgroundDashboard fontUniform" style={{ display: "flex", minWidth: "100vh", minHeight: "100vh", justifyContent: 'center', alignItems: 'center' }}>
            <div className="backgroundWhite" style={{ minWidth: "95%", minHeight: "95%", width: "95%", height: "95%", maxHeight: "95vh", overflow: "auto", borderRadius: "15px" }}>
                <div style={{ position: "fixed", width: "25vh" }}>
                    <div className="backgroundNavBar" style={{ minHeight: "10vh", borderTopLeftRadius: "15px", overflow: "hidden", borderRight: "1px solid #61677A"  }}>
                        <Image src={Name} style={{ width: "100%", height: "100%", marginTop: "15px" }} />
                    </div>
                    <div className="backgroundWhite" style={{ minHeight: "85vh", borderBottomLeftRadius: "15px", borderTop: "1px solid #61677A", borderRight: "1px solid #61677A" }}>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <ListGroup defaultActiveKey={['0']} alwaysOpen>
                                <ListGroup.Item as="li"><a href="/">Home</a></ListGroup.Item>
                            </ListGroup>
                            <ListGroup defaultActiveKey={['0']} alwaysOpen>
                                <ListGroup.Item as={Link} to="/project" state={{token: auth}}><a href="/project">Dashboard</a></ListGroup.Item>
                            </ListGroup>
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <ListGroup defaultActiveKey={['0']} alwaysOpen>
                                        <ListGroup.Item  as={Link} to="/metricwiki" state={{token: auth}}>Metric Wiki</ListGroup.Item>
                                    </ListGroup>
                                    <Accordion.Body style={{ paddingTop: "5px" }}>
                                        <Nav.Link style={{ borderBottom: "1px solid #61677A" }} as={Link} to="/metricwiki" state={{token: auth}}>Lead Time</Nav.Link>
                                        <Nav.Link style={{ borderBottom: "1px solid #61677A" }} as={Link} to="/metricwiki" state={{token: auth}}>Cycle Time</Nav.Link>
                                        <Nav.Link style={{ borderBottom: "1px solid #61677A" }} as={Link} to="/metricwiki" state={{token: auth}}>Burndown Chart</Nav.Link>
                                        <Nav.Link style={{ borderBottom: "1px solid #61677A" }} as={Link} to="/metricwiki" state={{token: auth}}>Dev Focus</Nav.Link>
                                        <Nav.Link style={{ borderBottom: "1px solid #61677A" }} as={Link} to="/metricwiki" state={{token: auth}}>Cruft</Nav.Link>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <ListGroup defaultActiveKey={['0']} alwaysOpen>
                                <ListGroup.Item as={Link} to="/aboutus" state={{token: auth}}><b>About Us</b></ListGroup.Item>
                            </ListGroup>
                        </Nav>
                    </div>
                </div>
                <div style={{ marginLeft: "25vh" }}>
                <div className="backgroundNavBar" style={{ minHeight: "10vh", borderBottom: "1px solid #61677A" }}>
                        <Navbar>
                            <div style={{ marginLeft: "40px", marginTop: "10px" }}><h2><b>Dashboard</b></h2></div>
                            <div className="ms-auto" style={{ marginRight: "45px", marginTop: "5px" }}>
                                <a href="/" style={{ fontSize: "20px" }}><u>Logout</u></a>
                            </div>
                        </Navbar>
                    </div>
                    <div className="backgroundWhite" style={{ minHeight: "85vh", padding: "30px" }}>
                        <Container>
                            <Row>
                                <Col sm={8}>
                                    <h2>Meet the Developer Team!</h2><br />
                                    We are a developer team of ten members: Aarti Kalekar (akalekar@asu.edu), Ashutosh Chaurasia (achaur11@asu.edu), 
                                    Advait Chirmule (achirmul@asu.edu), Atharva Date (adate1@asu.edu),
                                    Hasan Shahid (shahih25@asu.edu), Kushagra Kartik (kkartik12@asu.edu), Pradnya Chaudhari (pchaud21@asu.edu)
                                    Sehun Park (spark290@asu.edu), Shikha Verma (sverma89asu@asu.edu), and Vidya Rupak (vrupak@asu.edu); and
                                    we were mentored by Professor Kevin Gary (kgary@email.asu.edu).
                                </Col>
                                <Col sm={4}>
                                    <Image alt="Team Photo" src={Team} style={{ height: "100%", width: "100%", borderRadius: "10px" }} />
                                </Col>
                            </Row>

                        </Container>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default AboutUs;
