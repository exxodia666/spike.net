import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './style.scss';

const Skills = () => {
    return (
        <div id='skills'>
            <h4 className="display-4">Skills</h4>
            <p>React</p>
            <ProgressBar striped variant="success" now={60} />
            <p>React Native</p>
            <ProgressBar striped variant="info" now={30} />
            <p>Redux</p>
            <ProgressBar striped variant="warning" now={50} />
            <p>MobX</p>
            <ProgressBar striped variant="danger" now={20} />
        </div>
    );
}



export default Skills;
