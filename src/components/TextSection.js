import "../styles/TextSection.css";
import React, { useEffect } from 'react';
import { gsap, Power3, Linear } from "gsap"; 

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function TextSection() {
  useEffect(() => {
    let tl1 = gsap.timeline();
    tl1.to("#scrollingText1", {
      x: 500,
      backgroundPosition: '500px 0',
      scrollTrigger: {
        trigger: "body",
        start: 'top top',
        scrub: true,
      }
    })
    let tl2 = gsap.timeline();
    tl2.to("#scrollingText2", {
      x: -500,
      backgroundPosition: '-500px 0',
      scrollTrigger: {
        trigger: "body",
        start: 'top top',
        scrub: true,
      }
    })
    let tl3 = gsap.timeline();
    tl3.to("#scrollingText3", {
      x: 300,
      backgroundPosition: '300px 0',
      scrollTrigger: {
        trigger: "body",
        start: 'top top',
        scrub: true,
      }
    })
    let tl4 = gsap.timeline();
    tl4.to(".words-img", {
      rotation:"360", 
      scrollTrigger: {
        trigger: "body",
        start: 'top top',
        scrub: true,
      }
    })
  },[])
    return (
      <div className='text-sec'>
          <h2 id="scrollingText1">own your plug</h2>
          <h1 id="scrollingText2">own your plug</h1>
          <h2 id="scrollingText3">own your plug</h2>
          <div className="words-smoke-sec">
            <img src={process.env.PUBLIC_URL + "images/words.png"} className="img-fluid words-img" alt="words" />
            <img src={process.env.PUBLIC_URL + "images/smoke-1.png"} className="img-fluid" alt="smoke" />
          </div>
      </div>
    );
  }
  
  export default TextSection;
  


  