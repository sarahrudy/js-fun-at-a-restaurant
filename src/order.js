function takeOrder(order, deliveryOrders) {
  if (!deliveryOrders.includes(order) && deliveryOrders.length <= 2) {
    deliveryOrders.push(order)
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1)
    }
  }
}

function listItems(orders) {
  var listItemsByName = []
  for (var i = 0; i < orders.length; i++) {
    listItemsByName.push(orders[i].item)
  }
  return listItemsByName.join(', ')
}

function searchOrder(orders, orderItem) {
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].item === orderItem) {
      return true
    }
  }
  return false
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}
