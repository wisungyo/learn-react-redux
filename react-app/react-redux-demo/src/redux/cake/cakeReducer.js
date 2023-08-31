import {
    BUY_CAKE,
    RESTOCK_CAKE
} from "./cakeTypes"

const initialState = {
    numOfCakes: 10
}

const handleBuyCake = (state, action) => {
    const result = state.numOfCakes - action.payload

    if (result >= 0) {
        return {
            numOfCakes: result
        }
    } else {
        return state
    }
}

const handleRestockCake = (state, action) => {
    const result = state.numOfCakes + action.payload

    // prevent addition by minus value (2 + (-5) = -3)
    if (result >= 0) {
        return {
            numOfCakes: result
        }
    } else {
        return state
    }
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return handleBuyCake(state, action)

        case RESTOCK_CAKE:
            return handleRestockCake(state, action)

        default:
            return state
    }
}

export default cakeReducer