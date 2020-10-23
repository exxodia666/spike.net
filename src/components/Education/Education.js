import React from 'react';
import kpi from '../../pics/kpi.jpg'
import './style.scss';

const Education = () => {
    return (
        <div id='education'>
            <h4 className="display-4">Education</h4>
            <img
                className="d-block w-100"
                src={kpi}
                alt="First slide"
            />
        </div>
    );
}

export default Education;