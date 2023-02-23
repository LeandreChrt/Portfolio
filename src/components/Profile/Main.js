import './Profile.css'
import React from 'react'
import text from "./Text.json"
import Experience from './Experience';

export default function MainProfile(props) {

	const language = props.language

	return (
		<div id='profileContainer'>
			<div className='topContainer'>
				<div className='leftContainer'>
					<h2>{text.education[language]}</h2>
					{text.educations.map((experience, key) => <Experience key={key} language={language} experience={experience}></Experience>)}
				</div>
				<div className='rightContainer'>
					<h2>{text.experience[language]}</h2>
					{text.experiences.map((experience, key) => <Experience key={key} language={language} experience={experience}></Experience>)}
				</div>
			</div>
			<div className='bottomContainer'>
				<h1>Divers</h1>
			</div>
		</div>
	);
}