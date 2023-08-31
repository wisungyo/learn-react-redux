import {
    BUY_ICECREAM,
    RESTOCK_ICECREAM
} from "./iceCreamTypes";

export const buyIceCream = () => {
    return {
        type: BUY_ICECREAM
    }
}

export const restockIceCream = () => {
    return {
        type: RESTOCK_ICECREAM
    }
}