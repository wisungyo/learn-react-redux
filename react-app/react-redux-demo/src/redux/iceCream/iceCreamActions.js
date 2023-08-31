import {
    BUY_ICECREAM,
    RESTOCK_ICECREAM
} from "./iceCreamTypes";

export const buyIceCream = (number = 1) => {
    return {
        type: BUY_ICECREAM,
        payload: number
    }
}

export const restockIceCream = (number = 1) => {
    return {
        type: RESTOCK_ICECREAM,
        payload: number
    }
}