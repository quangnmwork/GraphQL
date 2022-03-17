const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./model/schema");
const app = express();

app.use("/graphql", graphqlHTTP({ schema: schema, graphiql: true })); // handle graphqh at this route

app.listen(8000, () => console.log("App running"));
