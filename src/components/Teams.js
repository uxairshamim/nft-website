import "../styles/teams.css";
import React from 'react';

function Teams() {

    return (
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
    );
  }
  
  export default Teams;
  


  