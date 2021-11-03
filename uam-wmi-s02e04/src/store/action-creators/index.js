export const fetchPizzas = (pizzas) => {
  return (dispatch) => {
    dispatch({
      type: "fetch_pizzas",
      payload: pizzas
    })
  }
}

export const fetchSauces = (sauces) => {
  return (dispatch) => {
    dispatch({
      type: "fetch_sauces",
      payload: sauces
    })
  }
}

export const fetchIngredients = (ingredients) => {
  return (dispatch) => {
    dispatch({
      type: "fetch_ingredients",
      payload: ingredients
    })
  }
}