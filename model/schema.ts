const lodash = require("lodash");
const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
} = graphql;

const books = [
  { name: "The wind", genre: "Fantasy", id: 1 },
  { name: "The wind", genre: "Fantasy", id: 2 },
  { name: "The wind", genre: "Fantasy", id: 3 },
];

const authors = [
  { name: "The wind", age: 12, id: 1 },
  { name: "The wind", age: 15, id: 2 },
  { name: "The wind", age: 22, id: 3 },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: {
      type: GraphQLString,
    },
    genre: {
      type: GraphQLString,
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent: any, args: { id: { type: typeof GraphQLID } }) {
        // code to get data from db or other source
        console.log(parent);
        return lodash.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent: any, args: { id: { type: typeof GraphQLID } }) {
        return lodash.find(authors, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
