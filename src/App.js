import React, { useState } from 'react';
import RecipeList from './RecipeList'

export default function App() {
	return (
		<RecipeList recipes={sampleRecipes} />
	)
}

const sampleRecipes = [
    {
        id: 1,
        name: 'Braised Paneer',
        cookTime: '0:20',
        servings: 5,
        instructions: [
            'Melt 2 tablespoons butter on a pan',
            'Saute 1/2 inch thick slices of paneer till golden brown',
            'Serve hot after generously sprinkling salt'
        ]
    },
    {
        id: 2,
        name: 'Toast Sandwich',
        cookTime: '0:25',
        servings: 5,
        instructions: [
            'Spread softened butter on one side of each slice of bread',
            'Toast on a griddle with buttered side up till golden brown',
            'Cut each toast into half diagonally, and fold and serve'
        ]
    }
]