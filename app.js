const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");

connectDb();
app.use(express.json());

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
