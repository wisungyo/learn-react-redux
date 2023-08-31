import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake, restockCake } from '../redux/cake/cakeActions'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()

    const toBuyCake = () => dispatch(buyCake())
    const toRestockCake = () => dispatch(restockCake())

    return (
        <div>
            <h2>Number Of Cakes (Hooks) - {numOfCakes}</h2>
            <button onClick={() => toBuyCake()}>Buy Cake</button>
            <button onClick={() => toRestockCake()}>Restock Cake</button>
        </div>
    )
}

export default HooksCakeContainer