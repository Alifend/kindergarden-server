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
app.use(cors());
//app.use("/tasks", taskRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
//

app.post("/users", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { name: req.body.name, password: hashedPassword };
    register.post();

    users.push(user);
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
});

app.listen(PORT, () => {
  console.log("Listening to ", PORT);
});
