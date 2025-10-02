const express = require("express");
const cors = require("cors")
const jwt = require("jsonwebtoken");
const JWT_SECRET = "thisisthesecret";

const app = express();
app.use(express.json());
app.use(cors())

const users = [];

function auth(req, res, next) {
    const token = req.headers.token
    if(!token){
        return res.json({
            message: "No token Found"
        })
    }
    try{
        let verifyToken = jwt.verify(token, JWT_SECRET)
        req.username = verifyToken.username
        res.header("jwt", token)
        next();
    }catch(err) {
        res.status(403).json({
            message: "Invalid/Expired Token...User is not logged in"
        })
    }
}

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let user = users.find((u) => u.username === username);

  if (user) {
    res.json({
      message: "User already signed up",
    });
  } else {
    users.push({
      username: username,
      password: password,
    });
    res.json({
      message: "User signed up",
    });
  }
});
app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  let user = users.find(
    (u) => u.username === username && u.password == password
  );
  if (user) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );

    res.header("jwt", token)

    res.json({
      token: token,
    });
  }else {
    res.json({
        message: "Credentials are incorrect"
    })
  }
});
app.get("/me", auth, (req, res) => {
  const user = users.find((u) => u.username === req.username);
    res.json({
      username: user.username,
      password: user.password,
    });
  
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
