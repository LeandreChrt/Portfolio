import React, { useEffect, useState } from 'react'
import Carousel from 'nuka-carousel/lib/carousel';


export default function CarouselComp(props) {

    const project = props.project;
    const images = require.context('../../assets')
    const [slideIndex, setSlideIndex] = useState(0)

    const befSlide = (currIndex, nextIndex) => {
        setSlideIndex(nextIndex)
    }

    useEffect(() => {
        setSlideIndex(0);
    }, [project])
    
    return (
        <Carousel
            slideIndex={slideIndex}
            beforeSlide={(currIndex, nextIndex) => befSlide(currIndex, nextIndex)}
        >
            {project.images.map((image, idx) => 
                <div className='imageCarousel' key={idx}>
                    <img height={`${550 * 0.7 - 80}px`} src={images(image)}/>
                </div>
            )}
        </Carousel>
    );
}