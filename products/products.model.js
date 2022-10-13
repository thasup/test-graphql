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

module.exports = {
  getAllProducts
}