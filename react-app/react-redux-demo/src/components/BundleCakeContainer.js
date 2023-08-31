import React, { useState } from 'react'
import { buyCake, restockCake } from '../redux/cake/cakeActions'
import { connect } from 'react-redux'

function BundleCakeContainer(props) {
    const [number, setNumber] = useState(1)

    const toBuyCake = () => {
        if (!number) return
        props.buyCake(number)
    }

    const toRestockCake = () => {
        if (!number) return
        props.restockCake(number)
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
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <input
                type='number'
                value={number}
                onChange={handleNumberChange}
            />
            <button onClick={toBuyCake}>Buy {isValidNumber()} Cake</button>
            <button onClick={toRestockCake}>Restock {isValidNumber()} Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number)),
        restockCake: (number) => dispatch(restockCake(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BundleCakeContainer)