import { BUY_CAKE, RESTOCK_CAKE } from "./cakeTypes"

export const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}

export const restockCake = () => {
    return {
        type: RESTOCK_CAKE
    }
}