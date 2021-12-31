let totalPrice = 0

export const createOrder = (formData) => {
  const order = {
    pizzas: {},
    sauces: {},
    price: 0
  }

  order.pizzas = getItemsFromOrder(formData.pizzas)
  order.sauces = getItemsFromOrder(formData.sauces)
  order.price += totalPrice

  return order
}

const getItemsFromOrder = (items) => {
  let orderedItems = {}
  
  Object.entries(items).forEach((item) => {
    const amountOfitem = item[1].number
    if (amountOfitem > 0) {

      orderedItems[item[0]] = amountOfitem

      for (let i = 0; i < amountOfitem; i++) {
        totalPrice += parseFloat(item[1].price)
      }
    }
  })

  return orderedItems
}
