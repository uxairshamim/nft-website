import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Slider from "react-slick";


class BottomCarousel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {

        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 1000,
            rtl: true,
            pauseOnHover: false,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
      

      return (
        <div>
        <Slider {...settings}>
          <div>
            <img src={process.env.PUBLIC_URL + "images/monkey-1.jpg"} className="img-fluid money-back" alt="monkey-back" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "images/monkey-2.jpg"} className="img-fluid money-back" alt="monkey-back" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "images/monkey-3.jpg"} className="img-fluid money-back" alt="monkey-back" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "images/monkey-4.jpeg"} className="img-fluid money-back" alt="monkey-back" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "images/monkey-1.jpg"} className="img-fluid money-back" alt="monkey-back" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "images/monkey-2.jpg"} className="img-fluid money-back" alt="monkey-back" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "images/monkey-3.jpg"} className="img-fluid money-back" alt="monkey-back" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "images/monkey-4.jpeg"} className="img-fluid money-back" alt="monkey-back" />
          </div>
        </Slider>
      </div>
      );
    }
  }


  export default BottomCarousel;
  