export const clearOrder = () => {
  return ({
    order: {
      pizzas: {},
      sauces: {},
      price: 0
    },
  })
}
