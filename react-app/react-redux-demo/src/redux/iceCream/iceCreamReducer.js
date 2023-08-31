import {
    BUY_ICECREAM,
    RESTOCK_ICECREAM
} from "./iceCreamTypes"

const initialState = {
    numOfIceCream: 20
}

const handleBuyIceCream = (state, action) => {
    const result = state.numOfIceCream - action.payload

    if (result >= 0) {
        return {
            numOfIceCream: result
        }
    } else {
        return state
    }
}

const handleRestockIceCream = (state, action) => {
    const result = state.numOfIceCream + action.payload

    // prevent addition by minus value (2 + (-5) = -3)
    if (result >= 0) {
        return {
            numOfIceCream: result
        }
    } else {
        return state
    }
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return handleBuyIceCream(state, action)

        case RESTOCK_ICECREAM:
            return handleRestockIceCream(state, action)

        default:
            return state
    }
}

export default iceCreamReducer