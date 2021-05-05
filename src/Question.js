import React, { useState, useRef } from 'react'

export default function Question({ setShowQuestion, coords: {lat, lon}, setWaterChoice }) {
    const waterChoiceRef = useRef()
    
    function submitHandler(e) {
        e.preventDefault()
        setWaterChoice(waterChoiceRef.current.checked)
        // console.log(waterChoiceRef)
        setShowQuestion(false)
    }

    return (
        <>
        <form onSubmit={submitHandler} >
		<div>Are the coordinates {lat}, {lon} on water?</div>
            <label> 
                <input
                    type="checkbox"
                    ref={waterChoiceRef}
                    // onChange={() => console.log(waterChoiceRef.current.checked)}
                />
                Yes (unchecked is assumed as no)
            </label>
            <button type="submit">Submit!</button>
        </form>
        </>
    )

}
