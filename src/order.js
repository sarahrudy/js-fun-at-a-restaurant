function takeOrder(order, deliveryOrders) {
  if (!deliveryOrders.includes(order) && deliveryOrders.length <= 2) {
    deliveryOrders.push(order)
  }
}







module.exports = {
  takeOrder,
  // refundOrder,
  // listItems,
  // searchOrder
}
