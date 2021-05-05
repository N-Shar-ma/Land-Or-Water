import React from 'react'

export default function Result({ waterChoice }) {
    return (
        <div>
            You chose {waterChoice ? "water" : "land"}
        </div>
    )
}
