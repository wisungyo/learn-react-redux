const redux = require('redux')
const createStore = redux.createStore

// action we create
const BUY_CAKE = 'BUY_CAKE'

// action to reduce numOfCakes by 1
function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First redux action"
    }
}

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
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

const store = createStore(reducer)

console.log('Initial state', store.getState())

const unsubcribe = store.subscribe(() => console.log('Updated state', store.getState()))

// update the state using action 'BUY_CAKE'
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubcribe()