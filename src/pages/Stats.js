import React from 'react'

export default function Stats({ totalCount, correctCount }) {
    const graphWidth = correctCount / totalCount * 100;
    return (
        <section>
            <h1>Stats</h1>
            Out of {totalCount} you got {correctCount} right!
            {totalCount && 
            <div style={{backgroundColor: "red", height: "20px", width: "clamp(250px, 80%, 600px)"}}>
                <div style={{backgroundColor: "green", height: "100%", width: `${graphWidth}%`}}>
                </div>
            </div>}
        </section>
    )
}
