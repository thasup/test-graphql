const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const schema = buildSchema(`
  type Query {
    products: [Product]
    orders: [Order]
  }

  type Product {
    id: ID!
    description: String!
    reviews: [Review]
    price: Float!
  }

  type Review {
    rating: Int!
    comment: String
  }

  type Order {
    date: String!
    subtotal: Float!
    items: [OrderItem]
  }

  type OrderItem {
    product: Product!
    quantity: Int!
  }
`);

const root = {
  products: [
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
  ],
  orders: [
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
  ]
}

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

app.listen(3000, () => {
  console.log('Running GraphQL server...');
});