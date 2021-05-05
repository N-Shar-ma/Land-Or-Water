import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

export default function App() {
    const [showQuestion, setShowQuestion] = useState(true)
    const [coords, setCoords] = useState(getRandomCoordsPair)
    const [waterChoice, setWaterChoice] = useState(false)
    

    
    if(showQuestion) return <Question setShowQuestion={setShowQuestion} coords={coords} setWaterChoice= {setWaterChoice}/>
    return <Result waterChoice={waterChoice}/>

    function getRandomCoordsPair() {
        const lat = getRandomCoord(90)
        const lon = getRandomCoord(180)
        return ({ lat, lon })
    }

    function getRandomCoord(maxMagnitude) {
        const sign = Math.random()<0.5 ? 1 : -1;
        const magnitude = Math.floor(Math.random()*(maxMagnitude+1))
        return sign*magnitude;
    }

}
