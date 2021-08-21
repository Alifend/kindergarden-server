const express = require("express");
const client = require("./../database/db");
const loginRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const TOKEN_PASSWORD = require("../database/token");

loginRouter.post("/", async (req, res) => {
  const textq =
    'SELECT * FROM "public"."administrador" WHERE "public"."administrador".email = $1 ';
  const user = await client.query(textq, [req.body.email]);
  console.log(user);
  if (user == null) {
    return res.status(400).send("Cannot find user");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.rows[0].password)) {
      const accessToken = generateAccessToken(user.rows[0].email);
      res.json({ accessToken: accessToken, type: user.rows[0].tipo });
    } else {
      res.send("Not Allowed");
    }
  } catch {
    res.status(500).send();
  }
});

function generateAccessToken(user) {
  return jwt.sign(user, TOKEN_PASSWORD);
}

module.exports = loginRouter;
