const express = require("express");
const client = require("../database/bd.js");
const registerRouter = express.Router();

registerRouter.post("/", async (req, res) => {
  const { email, password } = req.body;
  const textq =
    'INSERT INTO "public"."administrador" (email,password) VALUES ($1,$2) ';
  await client.query(textq, [email, password]);
  res.send("Añadido con éxito");
});

module.exports = registerRouter;
