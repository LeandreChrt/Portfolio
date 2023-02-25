import './Home.css';
import React, { useState } from 'react'
import text from "./Text.json"
import { TypeAnimation } from 'react-type-animation';

export default function MainHome(props) {

    const language = props.language;
    const helloWorldsText = [
        "Hello world!",
        "Bonjour monde!",
        "Hallo Welt!",
        "Ciao mondo!",
        "¡Hola Mundo!",
        "Ahoj světe!"
    ];
    const helloWorlds = customShuffle(helloWorldsText);
    
    function customShuffle(arr) {
        for (let i = arr.length - 1; i > 1; --i) {
            const j = 1 + Math.floor(Math.random() * i);
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr.reduce((list, elem, i) => {
            list.push(elem);
            list.push(2000);
            return list;
        }, []);
    }

    return (
        <div id='homeContainer'>
            <div className='leftContainer'>
                <TypeAnimation 
                    sequence={helloWorlds}
                    wrapper="h2"
                    className='helloWorld'
                    cursor={true}
                    repeat={Infinity}
                    speed={30}>
                </TypeAnimation>
                <h1 className='name'>Léandre CHRETIENNOT</h1>
                <h4>{text.age[language]}</h4>
                <div className='situation'>
                    <h2>{text.metier[language]}</h2>
                    <h3 dangerouslySetInnerHTML={{ __html: text.situation[language] }}></h3>
                </div>
            </div>
            <div className='rightContainer'></div>
        </div>
    );
}