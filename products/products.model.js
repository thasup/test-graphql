const products = [
  {
    id: 'redshoe',
    description: 'just a shoe',
    price: 34.34,
    reviews: [],
  },
  {
    id: 'bluehat',
    description: 'just a hat',
    price: 45.64,
    reviews: [],
  },
];

function getAllProducts() {
  console.log('Getting the products...');
  return products;
};

function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
};

function getProductsById(id) {
  return products.find((product) => {
    return product.id === id;
  });
};

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    description,
    price,
    reviews: []
  };

  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const matchedProduct = getProductsById(id);

  if (matchedProduct) {
    const newProductReview = {
      rating,
      comment,
    }

    matchedProduct.reviews.push(newProductReview);
    return newProductReview;
  }
};

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductsById,
  addNewProduct,
  addNewProductReview
}