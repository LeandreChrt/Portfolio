import './Project.css'
import React, { useState } from 'react'
import text from "./Text.json"
import Project from './Project'

export default function MainProject(props) {

	const language = props.language
    const [activeProject, setActiveProject] = useState(0)

	return (
		<div id='projectsContainer'>
			<div className='projectList'>
				{text.projects.map((project, idx) =>
					<div key={idx} className={`projectNameBox ${activeProject == idx ? "active" : ""}`} onClick={x => setActiveProject(idx)}>
						<p>{project.title[language]}</p>
					</div>
				)}
			</div>
            <Project language={language} project={text.projects[activeProject]}></Project>
		</div>
	);
}