const products = [
  {
    id: 'redshoe',
    description: 'just a shoe',
    price: 34.34,
  },
  {
    id: 'bluehat',
    description: 'just a hat',
    price: 45.64,
  },
];

function getAllProducts() {
  console.log('Getting the products...');
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function getProductsById(id) {
  return products.find((product) => {
    return product.id === id;
  });
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductsById
}