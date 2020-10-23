import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './style.scss';

const Skills = () => {
    return (
        <div id='skills'>
            <h4 className="display-4">Skills</h4>
            <p>
                <ProgressBar className='progress' animated label='React' striped variant="success" now={60} />
            </p>
            <p>
                <ProgressBar className='progress' animated label='React Native' striped variant="info" now={30} />
            </p>
            <p>
                <ProgressBar className='progress' animated label='Redux' striped variant="warning" now={50} />
            </p>
            <p>
                <ProgressBar className='progress' animated label='MobX' striped variant="danger" now={20} />
            </p>
        </div>
    );
}



export default Skills;
