import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream, restockIceCream } from '../redux/iceCream/iceCreamActions'

function HooksIceCreamContainer() {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)

    const dispatch = useDispatch()
    const toBuyIceCream = () => dispatch(buyIceCream())
    const toRestockIceCream = () => dispatch(restockIceCream())

    return (
        <div>
            <h2>Number of Ice Cream (Hooks)- {numOfIceCream}</h2>
            <button onClick={() => toBuyIceCream()}>Buy Ice Cream</button>
            <button onClick={() => toRestockIceCream()}>Restock Ice Cream</button>
        </div>
    )
}

export default HooksIceCreamContainer