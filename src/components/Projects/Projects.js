import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './style.scss';
import weather from '../../pics/weather/weather.png'
//import gallery from '../../pics/gallery/gallery.png'

const Projects = () => {
    return (
        <div id='projects'>
            <h4 className="display-4">Projects</h4>
            <Carousel>
                <Carousel.Item>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img
                            className="w-100"
                            alt="First slide"
                            src={weather}
                        />
                    </div> <Carousel.Caption>
                      {/*  <h5>Weather forecast</h5>
                        {/*<p>Description</p>*/}
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img
                            className="w-100"
                            alt="First slide"
                            src={weather}
                        />
                    </div>
                    <Carousel.Caption>
                       {/* <h5>Mini Gallery</h5>
                        {/*<p>Description</p>*/}
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
}



export default Projects;
