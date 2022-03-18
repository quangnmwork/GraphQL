const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./model/schema");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({});
// console.log(process.env.DB_CONNECT);
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect successful");
  });

const app = express();

app.use("/graphql", graphqlHTTP({ schema: schema, graphiql: true })); // handle graphqh at this route

app.listen(8000, () => console.log("App running"));
