export const updateOrder = (state, payload) => {
  return {
    ...state,
    order: {
      ...payload,
    },
  }
}
