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
					<h1>Présentation</h1>
				</div>
				<div className='rightContainer'>
					{text.experiences.map((experience, key) => <Experience key={key} language={language} experience={experience}></Experience>)}
				</div>
			</div>
			<div className='bottomContainer'>
				<h1>Divers</h1>
			</div>
		</div>
	);
}