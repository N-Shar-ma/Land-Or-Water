import React from 'react'
import styles from "./result.module.css"

export default function Result(props) {
    const { 
        waterChoice, 
        correctChoice, 
        loading, 
        reset, 
        isError 
    } = props
    
    return (
        <>
            {getMessage()}
            <button disabled={loading} className={styles.button} onClick={reset}>Play again!</button>
        </>
    )

    function getMessage () {
        if(isError) return "Sorry an error occured!"
        if (loading) return "Loading..."
        return `You chose ${waterChoice ? "water" : "land"} and your answer is ${correctChoice ? "right! 😄" : "wrong! 🙁"}`
    }
}
