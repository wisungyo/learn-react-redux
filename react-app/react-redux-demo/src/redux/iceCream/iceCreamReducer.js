import {
    BUY_ICECREAM,
    RESTOCK_ICECREAM
} from "./iceCreamTypes"

const initialState = {
    numOfIceCream: 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            if (state.numOfIceCream > 0) {
                return {
                    numOfIceCream: state.numOfIceCream - 1
                }
            } else {
                return state
            }

        case RESTOCK_ICECREAM:
            return {
                numOfIceCream: state.numOfIceCream + 1
            }

        default:
            return state
    }
}

export default iceCreamReducer