function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, type) {
  return {
    name,
    price,
    type
  };
}

function addIngredients(newIngredient, ingredientsArray) {
  if (!ingredientsArray.includes(newIngredient)) {
    ingredientsArray.push(newIngredient)
  }
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`
}

function decreasePrice(price) {
  return (price - (price * .1))
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  // createRecipe
}
