import React from 'react'

export default function Result({ waterChoice, correctChoice, loading, reset }) {
    return (
        <div>
            You chose {waterChoice ? "water" : "land"} and your answer is {loading ? "...wait for it" : correctChoice ? "right" : "wrong"}!
            <button onClick={reset}>Play again!</button>
        </div>
    )
}
