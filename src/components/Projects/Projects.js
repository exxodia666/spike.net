import React from 'react';
import { Carousel } from 'react-bootstrap';
import './style.scss';
import weather from '../../pics/weather/weather.png'

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
