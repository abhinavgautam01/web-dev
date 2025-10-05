const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { z } = require("zod");

mongoose.connect(
  "enter_connection_url"
);

app.post("/signup", async (req, res) => {
  const requiredBody = z.object({
    username: z.string().min(4).max(30),
    email: z.email(),
    password: z.string().min(4).max(20),
  });

  const parseData = requiredBody.safeParse(req.body);
  try {
    if (parseData.success) {
      const hashed_password = await bcrypt.hash(parseData.data.password, 5);
      await UserModel.create({
        username: parseData.data.username,
        email: parseData.data.email,
        password: hashed_password,
      });

      res.json({
        message: "User signed up",
      });
    } else {
      res.json({
        message: "Incorrect Format",
        error: parseData.error,
      });
    }
  } catch (e) {
    res.json({
      message: "Error while signup",
    });
  }
});
app.post("/signin", async (req, res) => {
  email = req.body.email;
  password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
  });

  if (user) {
    const match_password = await bcrypt.compare(password, user.password);
    if (match_password) {
      const token = jwt.sign(
        {
          id: user._id,
        },
        JWT_SECRET
      );

      res.header("jwt", token);
      res.json({
        token: token,
      });
    } else {
      res.status(403).json({
        message: "Incorrect Password",
      });
    }
  } else {
    res.status(403).json({
      message: "User not found",
    });
  }
});
app.post("/create-todo", auth, async (req, res) => {
  title = req.body.title;
  userId = req.userId;
  try {
    await TodoModel.create({
      title: title,
      done: false,
      userId: userId,
    });

    res.json({
      message: "Todo added succesfully",
    });
  } catch (error) {
    res.json({
      message: `${error}`,
    });
  }
});
app.get("/get-todos", auth, async (req, res) => {
  userId = req.userId;
  const todos = await TodoModel.find({
    userId: userId,
  });
  console.log(todos);
  res.json({
    todos: todos,
  });
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
