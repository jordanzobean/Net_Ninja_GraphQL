const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb://jordan:password69@ds151086.mlab.com:51086/gql-ninja-123'
);

mongoose.connection.once('open', () => console.log('connected to database'));

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => console.log('Listening on port 4000'));
