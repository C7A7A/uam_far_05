const sauceReducer = (state = [], action) => {
  switch (action.type) {
    case "fetch_sauces":
      return action.payload
    default:
      return state
  }
}

export default sauceReducer
