import React, { useRef } from 'react'
import styles from './question.module.css'

export default function Question(props) {
    const {
        setWaterChoice,
        lat, 
        lon, 
        setShowQuestion 
    } = props

    const waterChoiceRef = useRef()

    return (
        <form className={styles.main} onSubmit={submitHandler} >
            <h2>Are the coordinates {lat}, {lon} on water?</h2>
            <label className={styles.label}> 
                <input
                    className={styles.checkbox}
                    type="checkbox"
                    ref={waterChoiceRef}
                />
                🌊 Yes (unchecked is assumed as no) 
            </label>
            <button className={styles.button} type="submit">Submit!</button>
        </form>
    )

    function submitHandler(e) {
        e.preventDefault()
        setWaterChoice(waterChoiceRef.current.checked)
        // console.log(waterChoiceRef)
        setShowQuestion(false)
    }
}
