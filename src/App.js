import React, { useState, useEffect } from 'react';
import Question from './Question';
import Result from './Result';

const ACCESS_TOKEN = "KZUPxtJVPPjr2DXyqV3F"

export default function App() {
    const [showQuestion, setShowQuestion] = useState(true)
    const [coords, setCoords] = useState(getRandomCoordsPair)
    const [waterChoice, setWaterChoice] = useState()
    const [correctChoice, setCorrectChoice] = useState()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        if(showQuestion) return
        async function fetchData() {
            setLoading(true)
            const url = `https://api.onwater.io/api/v1/results/${coords.lat},${coords.lon}?access_token=${ACCESS_TOKEN}`
            const res = await (await fetch(url)).json()
            if(res.water === waterChoice) setCorrectChoice(true)
            else setCorrectChoice(false)
            setLoading(false)
        }
        fetchData()
        // return () => {
        //     cleanup
        // }
    }, [showQuestion])
    
    if(showQuestion) return <Question setShowQuestion={setShowQuestion} coords={coords} setWaterChoice= {setWaterChoice}/>
    return <Result waterChoice={waterChoice} correctChoice={correctChoice} loading={loading} reset={reset}/>

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

    function reset() {
        setCoords(getRandomCoordsPair)
        setShowQuestion(true)
    }
}
