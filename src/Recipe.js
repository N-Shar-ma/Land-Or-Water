import React from 'react'

export default function Recipe(props) {
    const { 
        name, 
        cookTime, 
        servings, 
        instructions 
    } = props
    return (
        <article>
            <header>
                <h3>{name}</h3>
                <button>Edit</button>
                <button>Delete</button>
            </header>
            <section>
                <span>Cook Time:</span>
                <span>{cookTime}</span>
            </section>
            <section>
                <span>Servings:</span>
                <span>{servings}</span>
            </section>
            <section>
                <span>Instructions:</span>
                <ol>
                    {instructions.map(instruction =>
                        <li>{instruction}</li>
                    )}
                </ol>
            </section>
        </article>
    )
}
