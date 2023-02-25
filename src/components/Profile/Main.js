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
					<h2>{text.experience[language]}</h2>
					{text.experiences.map((experience, key) => <Experience key={key} language={language} experience={experience}></Experience>)}
				</div>
				<div className='rightContainer'>
					<h2>{text.education[language]}</h2>
					{text.educations.map((experience, key) => <Experience key={key} language={language} experience={experience}></Experience>)}
					<h2>{text.languagesMainTitle[language]}</h2>
					<div className='languagesContainer'>
						<div className='languages'>
							<h3 className='title'>{text.language[language]}</h3>
							<ul>
								{text.languages.map((languageText, idx) => 
									<li key={idx}>{languageText[language]}</li>
								)}
							</ul>
						</div>
						<div className='computerLanguages'>
							<h3 className='title'>{text.computerLanguage[language]}</h3>
							<ul>
								{text.computerLanguages.map((languageText, idx) => 
									<li key={idx}>{languageText}</li>
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className='bottomContainer'>
				<h2>{text.hobby[language]}</h2>
				<div className='experienceContainer'>
					<ul className='hobbies'>
						{text.hobbies.map((hobby, idx) => 
							<li key={idx}>{hobby[language]}</li>
						)}
					</ul>
				</div>
				<div className='coordinates'>
					<p>Email : {text.coordinates.email}</p>
					<p>Github : <a href={text.links.github}>{text.links.github}</a></p>
				</div>
			</div>
		</div>
	);
}