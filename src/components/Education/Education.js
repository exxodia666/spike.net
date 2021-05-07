import React from 'react';
import kpi from '../../pics/kpi.jpg';
import './style.scss';

const Education = () => {
	return (
		<div id="education">
			<h4 className="display-5">Education</h4>
			<p> 151 - Automation and computer-integrated technologies NTYY KPI </p>
			<p> 09/2017 - Present</p>
			<p> GPA: 86</p>
			{
				//<img className="d-block w-100" src={kpi} alt="First slide" />
			}
		</div>
	);
};

export default Education;
