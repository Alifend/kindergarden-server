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
app.use(
  cors({
    origin: "https://www.localhost:3000",
  })
);
//app.use("/tasks", taskRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
//

app.get("/", (req, res) => {
  res.status(500).send("Conectado");
});

app.listen(PORT, () => {
  console.log("Listening to ", PORT);
});
