import "../styles/teams.css";
import React from 'react';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function Teams() {

    return (
        <div>
            <div className='team-main-sec'>
                <div className="globe-main-sec">
                    <img src={process.env.PUBLIC_URL + "images/globe-1.png"} className="img-fluid globe-img" alt="globe" />
                    <div className="line-box first-line-box">
                        <img src={process.env.PUBLIC_URL + "images/right-line.png"} className="img-fluid right-1" alt="right-line" />
                    </div>
                    <div className="line-box second-line-box">
                        <img src={process.env.PUBLIC_URL + "images/right-line.png"} className="img-fluid right-2" alt="right-line" />
                    </div>
                    <div className="line-box third-line-box">
                        <img src={process.env.PUBLIC_URL + "images/right-line.png"} className="img-fluid right-3" alt="right-line" />
                    </div>
                    <div className="line-box fourth-line-box">
                        <img src={process.env.PUBLIC_URL + "images/left-line.png"} className="img-fluid left-1" alt="left-line" />
                    </div>
                    <div className="line-box fifth-line-box">
                        <img src={process.env.PUBLIC_URL + "images/left-line.png"} className="img-fluid left-2" alt="left-line" />
                    </div>
                    <div className="line-box sixth-line-box">
                        <img src={process.env.PUBLIC_URL + "images/left-line.png"} className="img-fluid left-3" alt="left-line" />
                    </div>
                    <img src={process.env.PUBLIC_URL + "images/cigrate-img.png"} className="img-fluid cigrate-img" alt="cigrate-img" />
                </div>
            </div>
            <div className="title-main-sec">
                <Row>
                    <Col xl={6} className="title-right-sec">
                        <Container>
                            <h4>title</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <button>button</button>
                        </Container>
                    </Col>
                    <Col xl={6} className="team-image-sec">
                        <Container>
                            <img src={process.env.PUBLIC_URL + "images/title-img.png"} className="img-fluid title-img" alt="title-img" />
                        </Container>
                    </Col>
                </Row>
            </div>
            <div className="title-main-sec">
                <Row>
                    <Col xl={6} className="title-right-sec">
                        <Container>
                            <h4>title</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <button>button</button>
                        </Container>
                    </Col>
                    <Col xl={6} className="team-image-sec">
                        <Container>
                            <img src={process.env.PUBLIC_URL + "images/sea-img.png"} className="img-fluid sea-img" alt="sea-img" />
                        </Container>
                    </Col>
                </Row>
            </div>
        </div>
    );
  }
  
  export default Teams;
  


  