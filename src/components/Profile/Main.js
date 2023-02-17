import './Profile.css'
import React from 'react'
import text from "./Text.json"

export default function MainProfile(props) {

	const language = props.language

	return (
		<div id='profileContainer'>
			<div className='topContainer'>
				<div className='leftContainer'>
					<h1>Présentation</h1>
				</div>
				<div className='rightContainer'>
					<h1>Parcours</h1>
				</div>
			</div>
			<div className='bottomContainer'>
				<h1>Divers</h1>
			</div>
		</div>
	);
}