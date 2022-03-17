const lodash = require("lodash");
const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const books = [
  { name: "The wind", genre: "Fantasy", id: "1" },
  { name: "The wind", genre: "Fantasy", id: "2" },
  { name: "The wind", genre: "Fantasy", id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: {
      type: GraphQLString,
    },
    genre: {
      type: GraphQLString,
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent: any, args: { id: string }) {
        // code to get data from db or other source
        console.log(parent);
        return lodash.find(books, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
