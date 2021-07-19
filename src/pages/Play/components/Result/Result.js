import React from 'react'
import styles from "./result.module.css"

export default function Result(props) {
    const { 
        waterChoice,
        lat,
        lon,
        correctChoice, 
        loading, 
        reset, 
        isError 
    } = props

    const zoomLevel = 3;
    
    return (
        <>
            {getMessage()}
            <a className={loading || isError ? styles.disabledLink : undefined} target="_blank" rel="noopener noreferrer" href={`http://www.google.com/maps?q=${lat},${lon}&ll=${lat},${lon}&z=${zoomLevel}`}>View on Map</a>
            <button disabled={loading} className={styles.button} onClick={reset}>Play again!</button>
        </>
    )

    function getMessage () {
        if(isError) return "Sorry an error occured!"
        if (loading) return "Loading..."
        return `You chose ${waterChoice ? "water" : "land"} and your answer is ${correctChoice ? "right! 😄" : "wrong! 🙁"}`
    }
}
