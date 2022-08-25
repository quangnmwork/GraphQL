import { ApolloServer } from "apollo-server-express";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose, { ConnectOptions } from "mongoose";
import http from "http";
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginDrainHttpServer,
} from "apollo-server-core";

//fake data
const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};
// async function startGraphQLServer() {
//   mongoose
//     .connect(process.env.DB_CONNECT || "", {
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     } as ConnectOptions)
//     .then(() => {
//       console.log("Connect successful");
//     });
//   const app = express();
//   const httpServer = http.createServer(app);
//   const server = new ApolloServer({
//     resolvers,

//     csrfPrevention: true,
//     cache: "bounded",
//     plugins: [
//       ApolloServerPluginDrainHttpServer({ httpServer }),
//       ApolloServerPluginLandingPageLocalDefault({ embed: true }),
//     ],
//   });

//   app.use(cors());
//   app.use(cookieParser());

//   await server.start();
//   // server.applyMiddleware({ app });
//   // await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
//   // server.listen().then(({ url }) => {
//   //   console.log(`Server start at ${url}`);
//   // });
// }
