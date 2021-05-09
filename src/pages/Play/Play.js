import React, {useEffect, useState, useContext } from 'react'
import { StatsContext } from "../../App"
import Question from "./components/Question/Question"
import Result from "./components/Result/Result"
import styles from "./play.module.css"

const ACCESS_TOKEN = "KZUPxtJVPPjr2DXyqV3F"

export default function Play() {
    const [showQuestion, setShowQuestion] = useState(true)
    const [{ lat, lon }, setCoords] = useState(getRandomCoordsPair)
    const [waterChoice, setWaterChoice] = useState()
    const [correctChoice, setCorrectChoice] = useState()
    const [loading, setLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const {
        setCorrectCount,
        setTotalCount
    } = useContext(StatsContext)
    
    useEffect(() => {
        if(showQuestion) return
        async function fetchData() {
            setIsError(false)
            setLoading(true)
            const url = `https://api.onwater.io/api/v1/results/${lat},${lon}?access_token=${ACCESS_TOKEN}`
            try{
                const res = await (await fetch(url)).json()
                if(res.water === waterChoice) {
                    setCorrectChoice(true)
                    setCorrectCount(prev => prev+1)
                }
                else setCorrectChoice(false)
                setTotalCount(prev => prev+1)
            } catch {
                setIsError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [showQuestion])
    
    if(showQuestion) 
    return <Question 
        setWaterChoice={setWaterChoice}
        lat={lat} 
        lon={lon} 
        setShowQuestion= {setShowQuestion}
    />
    else
    return <Result 
        waterChoice={waterChoice} 
        correctChoice={correctChoice} 
        loading={loading} 
        reset={resetQuestion} 
        isError={isError}
    />

    function getRandomCoordsPair() {
        const lat = getRandomCoord(90)
        const lon = getRandomCoord(180)
        return ({ lat, lon })
    }

    function getRandomCoord(maxMagnitude) {
        const sign = Math.random()<0.5 ? 1 : -1;
        const magnitude = (Math.random()*maxMagnitude).toFixed(2)
        return sign*magnitude;
    }

    function resetQuestion() {
        setCoords(getRandomCoordsPair)
        setShowQuestion(true)
    }
}
