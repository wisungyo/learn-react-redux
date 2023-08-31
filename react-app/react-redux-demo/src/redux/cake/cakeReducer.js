import {
    BUY_CAKE,
    RESTOCK_CAKE
} from "./cakeTypes"

const initialState = {
    numOfCakes: 10
}

const handleBuyCake = (state) => {
    if (state.numOfCakes <= 0)
        return state

    return {
        numOfCakes: state.numOfCakes - 1
    }
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return handleBuyCake(state)

        case RESTOCK_CAKE:
            return {
                numOfCakes: state.numOfCakes + 1
            }

        default:
            return state
    }
}

export default cakeReducer