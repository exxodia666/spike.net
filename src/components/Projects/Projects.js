import React from 'react';
import { Carousel } from 'react-bootstrap';
import './style.scss';


import weather from '../../pics/weather/weather.png'

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
                    </div>
                </Carousel.Item>


                <Carousel.Item>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img
                            className="w-100"
                            alt="First slide"
                            src={weather}
                        />
                    </div>
                </Carousel.Item>


            </Carousel>
        </div>
    );
}



export default Projects;
