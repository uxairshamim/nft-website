import "../styles/Banner.css";
import Colorsbox from "./Colorsbox";

import React from 'react';

import SmokeMachine from '@bijection/smoke'


  class Banner extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstBoxColor: "0C0F0A",
        secondBoxColor: "FF206E",
        thirdBoxColor: "FBFF12",
        fourthBoxColor: "41EAD4",
        fifthBoxColor: "FFFFFF",
      };
    }

    componentDidMount(){
      this.smoke();
    }

    smoke(){
      var canvas = document.getElementById('canvas')
      var ctx = canvas.getContext('2d')
      canvas.width = 1000
      canvas.height = 560

      var party = SmokeMachine(ctx, [255, 255, 255])

      party.start() // start animating

      party.addSmoke(500,500,10) // wow we made smoke

      setInterval(function(){

        party.stop() // stop animating

        // party.addSmoke(255,255,255)
        party.addSmoke(500,500,10)

        for(var i=0;i<10;i++){
          party.step(10) // pretend 10 ms pass and rerender
        }

        setTimeout(function(){
          party.start()
        },1000)

      },1000)
    }
  
    render() {
      return (
        <div className="banner-main-sec">
            <img src={process.env.PUBLIC_URL + "images/monkey-back.png"} className="img-fluid money-back" alt="monkey-back" />
            <div className="banner-color-boxes">
                <Colorsbox box={this.state.firstBoxColor} />
                <Colorsbox box={this.state.secondBoxColor}  />
                <Colorsbox box={this.state.thirdBoxColor}  />
                <Colorsbox box={this.state.fourthBoxColor}  />
                <Colorsbox box={this.state.fifthBoxColor}  />
            </div>
            <div className="monkey-smoke-box">
              <canvas id="canvas">
              </canvas>
              <img src={process.env.PUBLIC_URL + "images/monkey-front.png"} className="img-fluid monkey-front" alt="monkey-front" />
            </div>
        </div>
      );
    }
  }


  export default Banner;
  