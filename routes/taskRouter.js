const express = require("express");
const client = require("../database/bd.js");
const taskRouter = express.Router();

taskRouter.post("/", async (req, res) => {
  const { text, day, reminder } = req.body;
  const textq =
    'INSERT INTO "public"."task" (text, day ,reminder) VALUES ($1,$2,$3) returning *';
  const response = await client.query(textq, [text, day, reminder]);
  res.send(response.rows);
});

taskRouter.get("/", async (req, res) => {
  const data = await client.query('SELECT * FROM "public"."task"');
  console.log(data.rows);
  res.send(data.rows);
});

taskRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id, "hola sesadasd");
  await client.query(
    'UPDATE "public"."task" SET reminder = NOT reminder where "public"."task".id = $1',
    [id]
  );
  res.send("Succesfully updated");
});

taskRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await client.query(
    'DELETE FROM "public"."task" where "public"."task".id = $1',
    [id]
  );
  res.send("Succesfully deleted");
});

module.exports = taskRouter;
