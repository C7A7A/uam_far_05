const pizzaReducer = (state = [], action) => {
  switch (action.type) {
    case "fetch_pizzas":
      return action.payload
    default:
      return state
  }
}

export default pizzaReducer