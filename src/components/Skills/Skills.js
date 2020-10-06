import React from 'react';
import './style.scss';

const Skills = () => {
    return (
        <div id='skills'>
            <h3>Skills</h3>
            <div>
                <p>React</p>
                <div className='skill'>
                    <div className='react tech'>

                    </div>
                </div>
            </div>
            <div>
                <p>React Native</p>
                <div className='skill'><div className='rnative tech'>

                </div></div>
            </div>
            <div>
                <p>Redux</p>
                <div className='skill'><div className='redux tech'>

                </div></div>
            </div>
            <div>
                <p>MobX</p>
                <div className='skill'><div className='mobx tech'>

                </div></div>
            </div>
        </div>
    );
}




export default Skills;
