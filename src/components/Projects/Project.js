import React from 'react'
import CarouselComp from './Carousel';

export default function Project(props) {
    
    const language = props.language;
    const project = props.project;


    return (
		<div className='projectBox'>
            <div className='mainProjectSection'>
                <h2>{project.title[language]}</h2>
                <p dangerouslySetInnerHTML={{ __html: project.explenation[language] }}></p>
            </div>
            <div className='carouselContainer'>
                <div className='imageCarousel'>
                    {project.images.length > 0 ?
                        <CarouselComp project={project} key={project}>
                        </CarouselComp>
                        :
                        <h4 style={{textAlign: "center", margin: "auto"}}>Pas d'images</h4>
                    }
                </div>
            </div>
            <div className='projectUtils'>
                {project.techno.map((tech, idx) =>
                    <p key={idx}>{tech}</p>
                )}
            </div>
		</div>
	);
}