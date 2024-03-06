import express from "express";
import config from "./config/index.js";
import loaders from "./loaders/index.js";

async function startServer() {
  const app = express();
  await loaders(app);

  app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`);
  });
}

startServer();
