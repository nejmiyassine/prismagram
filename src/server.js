require("dotenv").config();
import express from "express";
import { createYoga } from "graphql-yoga";
import schema from "./schema";
import logger from "morgan";

const app = express();

const yoga = createYoga({ schema });

app.use("/graphql", yoga);
app.use(logger("dev"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(
    `Running a GraphQL API server at http://localhost:${PORT}/graphql`
  );
});
