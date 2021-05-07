import React from 'react';
import ProgressComponent from '../template/ProgressComponent';
import './style.scss';

const Skills = () => {
	const skills = [
		{
			name: 'JavaScript',
			value: 60,
			style: 'info',
		},
		{
			name: 'TypeScript',
			value: 60,
			style: 'warning',
		},
		{
			name: 'React',
			value: 60,
			style: 'danger',
		},
		{
			name: 'React Native',
			value: 60,
			style: 'success',
		},
		{
			name: 'Redux',
			value: 60,
			style: 'danger',
		},
		{
			name: 'Redux Thunk',
			value: 60,
			style: 'warning',
		},
		{
			name: 'Git',
			value: 60,
			style: 'info',
		},
		{
			name: 'React Navigation',
			value: 60,
			style: 'success',
		},
		{
			name: 'MobX',
			value: 60,
			style: 'danger',
		},
	];
	return (
		<div id="skills">
			<h4 className="display-5">Skills</h4>
			{skills.map((e) => {
				return <ProgressComponent name={e.name} value={e.value} style={e.style} />;
			})}
		</div>
	);
};

{
	/* <p>
				<ProgressBar className="progress" animated label="React Native" striped variant="info" now={30} />
			</p>
			<p>
				<ProgressBar className="progress" animated label="Redux" striped variant="warning" now={50} />
			</p>
			<p>
				<ProgressBar className="progress" animated label="MobX" striped variant="danger" now={20} />
			</p> */
}

export default Skills;
