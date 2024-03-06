import express from "express";
import cors from "cors";
import config from "../config/index.js";
import routes from "../api/index.js";

export default (app) => {
  app.get("/status", (req, res) => {
    res.json({ status: "OK" }).status(200).end();
  });
  app.head("/status", (req, res) => {
    res.status(200).end();
  });
  app.enable("trust proxy");
  app.use(cors());
  app.use(express.json());

  app.use(config.api.prefix, routes());

  app.use((req, res, next) => {
    const err = new Error("Not Found");
    err["status"] = 404;
    next(err);
  });

  app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};
