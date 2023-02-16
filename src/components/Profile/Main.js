import React from 'react'
import text from "./Text.json"

export default function MainProfile(props) {

	const language = props.language

	return (
		<div className='profileContainer'>
			<h1 className='text'>HELLO WORLD</h1>
			<p className='text'>Salut les cailloux</p>
			<p>{text.presentation[language]}</p>
		</div>
	);
}