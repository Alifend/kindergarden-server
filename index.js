const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const taskRouter = require("./routes/taskRouter.js");
// const auth = require("./routes/registerRouter.js");
const cors = require("cors");
const app = express();
const PORT = process.env.NODE_ENV || 3434;
const registerRouter = require("./routes/registerRouter");
const loginRouter = require("./routes/loginRouter");
// Middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//app.use("/tasks", taskRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
//

app.get("/", (req, res) => {
  res.status(202).send("Conectado");
});

app.listen(PORT, () => {
  console.log("Listening to ", PORT);
});
