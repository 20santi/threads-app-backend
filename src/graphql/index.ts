import { ApolloServer } from "@apollo/server";
import { prismaClient } from "../lib/db";
import { User } from "./user";

export default async function createApolloGraphqlServer() {
  const gqlServer = new ApolloServer({
    typeDefs: `
            type Query {
                ${User.queries}
            }
            type Mutation {
              ${User.mutations}
            }
        `,
    resolvers: {
      Query: {
        ...User.resolvers.queries,
      },
      Mutation: {
        ...User.resolvers.mutations
      }
    },
  });

  await gqlServer.start();
  return gqlServer;
}
