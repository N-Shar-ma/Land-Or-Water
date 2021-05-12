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
            {!loading && <button className={styles.button} onClick={reset}>Play again!</button>}
        </>
    )

    function getMessage () {
        if(isError) return "Sorry an error occured!"
        let msg = `You chose ${waterChoice ? "water" : "land"} and your answer is `
        if (loading) msg+= "...wait for it"
        else msg+= correctChoice ? "right! 😄" : "wrong! 🙁"
        return msg
    }
}
