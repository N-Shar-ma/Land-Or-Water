import React, { useState, useEffect } from 'react'

export default function useLocalStorage(name, initialValue) {
    const PREFIX = "WaterOrLand"
    const KEY = `${PREFIX}-${name}`
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(KEY)) || initialValue)

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}
