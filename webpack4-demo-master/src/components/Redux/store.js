import { createStore } from 'redux'
const initialState = {
  count: 0
}
const ADD = 'ADD'
function reducer(state = initialState, action){
  console.log(state, action)
  switch(action.type){
    case ADD:
      return { count: state.count + 1 }
    default:
      return state
  }
}
const store = createStore(reducer, initialState)
console.log(store)
export default store