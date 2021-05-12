import React, { useContext } from 'react'
import { StatsContext } from '../../App';
import styles from "./stats.module.css"

export default function Stats() {
    const { 
        totalCount, 
        correctCount, 
        setTotalCount, 
        setCorrectCount 
    } = useContext(StatsContext)

    const graphWidth = correctCount / totalCount * 100;
    
    return (
        <>
            <h2>Stats</h2>
            Out of {totalCount} you got {correctCount} right!
            {totalCount ? 
            <>
            <div style={{backgroundColor: "red", height: "20px", width: "clamp(250px, 80%, 600px)"}}>
                <div style={{backgroundColor: "green", height: "100%", width: `${graphWidth}%`}}>
                </div>
            </div>
            <button className={styles.button} onClick={resetStats}>Reset Stats</button>
            </> : ""}
        </>
    )

    function resetStats() {
        setTotalCount(0)
        setCorrectCount(0)
    }
}
