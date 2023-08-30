const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

// actions we create
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

/**
 * 
 * @info this is called Action Creator.
 * @info action creator is a function that returns an action.
 * 
 */
function buyCake() {
    return {
        type: BUY_CAKE,
        info: "Action for buying a cake",
        logic: "totalCake - 1"
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: "Action for buying an ice cream",
        logic: "totalIceCream - 1"
    }
}

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCream: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }

        default:
            return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }

        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer)

console.log('Initial state', store.getState())

const unsubcribe = store.subscribe(() => console.log('Updated state', store.getState()))

// update the state using action 'BUY_CAKE'
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

// update the state using action 'BUY_ICECREAM'
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubcribe()