const productsModel = require('./products.model');

module.exports = {
  Query: {
    products: () => {
      return productsModel.getAllProducts();
    },
    productsByPrice: (_parent, args) => {
      return productsModel.getProductsByPrice(args.min, args.max);
    },
    product: (_parent, args) => {
      return productsModel.getProductsById(args.id);
    }
  }
};