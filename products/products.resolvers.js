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
  },
  Mutation: {
    addNewProduct: (_parent, args) => {
      return productsModel.addNewProduct(args.id, args.description, args.price);
    },
    addNewProductReview(_parent, args) {
      return productsModel.addNewProductReview(args.id, args.rating, args.comment);
    }
  }
};