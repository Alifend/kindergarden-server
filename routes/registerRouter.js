const express = require("express");
const client = require("./../database/db");
const registerRouter = express.Router();
const bcrypt = require("bcrypt");
const authToken = require("../authToken/authToken");

registerRouter.post("/", authToken, async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const textq =
    'INSERT INTO "public"."administrador" (email,password) VALUES ($1,$2) ';
  await client.query(textq, [email, hashedPassword]);
  res.send("Añadido con éxito");
});

module.exports = registerRouter;
