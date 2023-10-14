import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import createApolloGraphqlServer from "./graphql";

async function init() {
  const app = express();
  const PORT = 8000;

  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ message: "Server is up and runing " });
  });

  //create graphql server
  const gqlServer = await createApolloGraphqlServer();

  app.use("/graphql", expressMiddleware(gqlServer));

  app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
}

init();
