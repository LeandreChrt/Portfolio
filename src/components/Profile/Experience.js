import React from 'react'

export default function Experience(props) {

	const language = props.language;
    const experience = props.experience;

    return (
		<div className='experienceContainer'>
            <h2 className='experienceTitle'>{experience.title[language]} ({experience.years.join(" - ")})</h2>
			<ul className='experienceInfos'>
				{
					experience.additionalContent.map((infos, idx) =>
						<li key={idx} className="experienceInfo" dangerouslySetInnerHTML={{ __html: infos[language] }}>
						</li>
					)
				}
			</ul>
		</div>
	);
}