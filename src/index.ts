import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

async function init() {
  const app = express();
  const PORT = 8000;

  app.use(express.json());

  //create graphql server
  const gqlServer = new ApolloServer({
    typeDefs: `
        type Query {
            hello: String
        }
    `,
    resolvers: {
        Query: {
            hello: () => `hello`
        }
    },
  })

  //start the graphql server
  await gqlServer.start();

  app.get("/", (req, res) => {
    res.json({ message: "Server is up and runing " });
  });

  app.use("/graphql", expressMiddleware(gqlServer));

  app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
}

init();
