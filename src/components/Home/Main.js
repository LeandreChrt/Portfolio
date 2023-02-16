import './Home.css';
import React from 'react'
import text from "./Text.json"
import imgProfile from '../../assets/leandrechretiennot.jpg'

export default function MainHome(props) {

    const language = props.language

    return (
        <div className='homeContainer'>
            <div className='leftContainer'>
                <h1>Léandre CHRETIENNOT</h1>
                <h2>{text.metier[language]}</h2>
                <h3 dangerouslySetInnerHTML={{ __html: text.situation[language] }}></h3>
            </div>
            <div className='rightContainer'>
                {/* <img height="300px" width="240px" src={imgProfile} alt='Léandre Chretiennot'></img> */}
            </div>
        </div>
    );
}