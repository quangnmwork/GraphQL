const lodash = require("lodash");
const graphql = require("graphql");
const Author = require("./Author");
const Book = require("./Book");

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt } = graphql;

const books = [
  { name: "The wind", genre: "Fantasy", id: "1", authorId: "1" },
  { name: "The wind", genre: "Fantasy", id: "2", authorId: "2" },
  { name: "The wind", genre: "Fantasy", id: "3", authorId: " 2 " },
];

const authors = [
  { name: "Gabriel", age: 12, id: "1" },
  { name: "Max", age: 15, id: "2" },
  { name: "Wind", age: 22, id: "3" },
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
    author: {
      type: AuthorType,
      resolve(parent: any, args: any) {
        console.log(parent, args);
        return lodash.find(authors, { id: parent.authorId });
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLString },
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
        id: { type: GraphQLString },
      },
      resolve(parent: any, args: { id: { type: string } }) {
        // code to get data from db or other source
        // console.log(parent);
        // console.log(args.id);
        // console.log(lodash.find(books, { id: args.id }));
        return lodash.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLString } },
      resolve(parent: any, args: { id: { type: string } }) {
        return lodash.find(authors, { id: args.id });
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      resolve(
        parent: any,
        args: { name: { type: string }; age: { type: string } }
      ) {
        const author = new Author({ name: args.name, age: args.age });
        return author.save();
      },
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        authorId: { type: GraphQLString },
      },
      resolve(
        parent: any,
        args: {
          name: { type: string };
          genre: { type: string };
          authorId: { type: string };
        }
      ) {
        const book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
        });
        return book.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
