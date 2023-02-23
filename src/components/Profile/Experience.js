import React from 'react'

export default function Experience(props) {

	const language = props.language;
    const experience = props.experience;

    return (
		<div className='experienceContainer'>
            <h2>{experience.title[language]} ({experience.years.join(" - ")})</h2>
			<h4>{experience.subtitle ? experience.subtitle[language] : ""}</h4>
		</div>
	);
}