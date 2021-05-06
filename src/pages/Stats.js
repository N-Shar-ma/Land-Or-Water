import React from 'react'

export default function Stats({ totalCount, correctCount }) {
    return (
        <section>
            <h1>Stats</h1>
            Out of {totalCount} you got {correctCount} right!
        </section>
    )
}
