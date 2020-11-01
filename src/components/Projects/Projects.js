import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import pic1 from '../../pics/pic1.jpg'
import pic2 from '../../pics/pic2.jpg'
import pic3 from '../../pics/pic3.jpg'
import './style.scss';


import weather from '../../pics/weather/weather.png'
import weather1 from '../../pics/weather/weather1.png'
import weather2 from '../../pics/weather/weather2.png'
import weather3 from '../../pics/weather/weather3.png'

const Projects = () => {
    return (
        <div id='projects'>
            <h4 className="display-4">Projects</h4>
            <Carousel prevIcon={<span aria-hidden="false"
                style={{ backgroundColor: 'black' }}
                className="carousel-control-prev-icon"
            />}
                nextIcon={<span aria-hidden="false"
                    style={{ backgroundColor: 'black', color: 'red' }}
                    className="carousel-control-next-icon"
                />}>
                <Carousel.Item>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img
                            className="w-100"
                            alt="First slide"
                            src={weather}
                        />
                    </div> <Carousel.Caption>
                        <h5>Weather forecast</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img
                            className="w-100"
                            alt="First slide"
                            src={pic1}
                        />
                    </div>
                    <Carousel.Caption>
                        <h5>Mini Gallery</h5>
                        <p>MobX</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
}



export default Projects;
