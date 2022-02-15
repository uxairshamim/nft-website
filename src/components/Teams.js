import "../styles/teams.css";
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import React, { useEffect, useState  } from 'react';
import { gsap, Power3, Linear } from "gsap"; 

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Teams() {

    const [firstLine, setFirstLine] = useState(false);
    const [secondLine, setSecondLine] = useState(false);
    const [thirdLine, setThirdLine] = useState(false);
    const [fourthLine, setFourthLine] = useState(false);
    const [fifthLine, setFifthLine] = useState(false);
    const [sixthLine, setSixthLine] = useState(false);

    const setTeamsName = () => {

        setTimeout(
            function() {
                setFirstLine(true);
            }
            .bind(this),
            1000
        );

        setTimeout(
            function() {
                setSecondLine(true);
            }
            .bind(this),
            1500
        );

        setTimeout(
            function() {
                setThirdLine(true);
            }
            .bind(this),
            2000
        );

        setTimeout(
            function() {
                setFourthLine(true);
            }
            .bind(this),
            2500
        );

        setTimeout(
            function() {
                setFifthLine(true);
            }
            .bind(this),
            3000
        );

        setTimeout(
            function() {
                setSixthLine(true);
            }
            .bind(this),
            3500
        );
    };

    useEffect(() => {

        let masks = gsap.utils.toArray(".img-mask");

        gsap.to(masks[1], {
          height: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: ".revealer",
            start: "top top",
            pin: true,
            end: "+=100%",
            scrub: 0.5
          }
        });
      },[])

    return (
        <div>
            <div className='team-main-sec'>
                <div className="globe-main-sec">
                    <img src={process.env.PUBLIC_URL + "images/globe-1.png"} className="img-fluid globe-img" alt="globe" onClick={setTeamsName} />
                    <div className="line-box first-line-box">
                        <img src={process.env.PUBLIC_URL + "images/right-line.png"} className="img-fluid right-1" alt="right-line" />
                        {firstLine ? (
                            <h6>Lorem ipsum</h6>
                        ) : (
                            null
                        )}                        
                    </div>
                    <div className="line-box second-line-box">
                        <img src={process.env.PUBLIC_URL + "images/right-line.png"} className="img-fluid right-2" alt="right-line" />
                        {secondLine ? (
                            <h6>Lorem ipsum</h6>
                        ) : (
                            null
                        )}  
                    </div>
                    <div className="line-box third-line-box">
                        <img src={process.env.PUBLIC_URL + "images/right-line.png"} className="img-fluid right-3" alt="right-line" />
                        {thirdLine ? (
                            <h6>Lorem ipsum</h6>
                        ) : (
                            null
                        )}  
                    </div>
                    <div className="line-box fourth-line-box">
                        <img src={process.env.PUBLIC_URL + "images/left-line.png"} className="img-fluid left-1" alt="left-line" />
                        {fourthLine ? (
                            <h6>Lorem ipsum</h6>
                        ) : (
                            null
                        )}  
                    </div>
                    <div className="line-box fifth-line-box">
                        <img src={process.env.PUBLIC_URL + "images/left-line.png"} className="img-fluid left-2" alt="left-line" />
                        {fifthLine ? (
                            <h6>Lorem ipsum</h6>
                        ) : (
                            null
                        )}  
                    </div>
                    <div className="line-box sixth-line-box">
                        <img src={process.env.PUBLIC_URL + "images/left-line.png"} className="img-fluid left-3" alt="left-line" />
                        {sixthLine ? (
                            <h6>Lorem ipsum</h6>
                        ) : (
                            null
                        )}  
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
            <section class="revealer">
                <div class="img-mask"><img src="https://unsplash.it/800/450?image=766" /></div>
                <div class="img-mask"><img src="https://unsplash.it/800/450?image=1080" /></div>
            </section>
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
  


  