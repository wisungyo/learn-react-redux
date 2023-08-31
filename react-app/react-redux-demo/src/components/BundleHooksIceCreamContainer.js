import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream, restockIceCream } from '../redux/iceCream/iceCreamActions'

function BundleHooksIceCreamContainer() {
    const [number, setNumber] = useState(1)
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)

    const dispatch = useDispatch()

    const toBuyIceCream = () => {
        if (!number) return
        dispatch(buyIceCream(number))
    }

    const toRestockIceCream = () => {
        if (!number) return
        dispatch(restockIceCream(number))
    }

    const handleNumberChange = (event) => {
        const input = event.target.value
        const parsedInput = parseInt(input, 10) // parse as base 10
        setNumber(parsedInput);
    }

    const isValidNumber = () => {
        return !isNaN(number) ? number : ''
    }

    return (
        <div>
            <h2>Number of Ice Cream (Hooks) - {numOfIceCream}</h2>
            <input
                type='number'
                value={number}
                onChange={handleNumberChange}
            />
            <button onClick={toBuyIceCream}>Buy {isValidNumber()} Ice Cream</button>
            <button onClick={toRestockIceCream}>Restock {isValidNumber()} Ice Cream</button>
        </div>
    )
}

export default BundleHooksIceCreamContainer