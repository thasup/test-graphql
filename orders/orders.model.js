const orders = [
  {
    date: '13-10-2022',
    subtotal: 103.22,
    items: [
      {
        product: {
          id: 'redshoe',
          description: 'old red shoe',
          price: 32.44,
        },
        quantity: 2,
      }
    ]
  }
];

function getAllOrders() {
  console.log('Getting the orders...');
  return orders;
}

module.exports = {
  getAllOrders
}