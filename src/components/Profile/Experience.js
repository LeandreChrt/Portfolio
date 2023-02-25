import React from 'react'

export default function Experience(props) {

	const language = props.language;
    const experience = props.experience;

    return (
		<div className='experienceContainer'>
            <h3 className='title'>{experience.title[language]} ({experience.years.join(" - ")})</h3>
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