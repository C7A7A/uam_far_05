import { combineReducers } from "redux"
import pizzaReducer from "./pizzaReducer"
import sauceReducer from "./sauceReducer"
import ingredientReducer from "./ingredientReducer"

const reducers = combineReducers({
  pizzas: pizzaReducer,
  sauces: sauceReducer,
  ingredients: ingredientReducer
})

export default reducers