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
        <section className={styles.main}>
            {getMessage()}
            {!loading && <button onClick={reset}>Play again!</button>}
        </section>
    )

    function getMessage () {
        if(isError) return "Sorry an error occured!"
        let msg = `You chose ${waterChoice ? "water" : "land"} and your answer is `
        if (loading) msg+= "...wait for it"
        else msg+= correctChoice ? "right!" : "wrong!"
        return msg
    }
}
