const express = require("express");
const app = express();
const connectDb = require("./database");
const { localStrategy, jwtStrategy } = require("./middlewares/passports");
const passport = require("passport");
const errorHandler = require("./middlewares/errorHandler");
const notFoundHandler = require("./middlewares/notFoundHandler");
const morgan = require("morgan");
const cors = require("cors");
const { register, login } = require("./api/auth/controllers");
const authRoutes = require("./api/auth/routes");
const tripRoutes = require("./api/trips/routes");
connectDb();
app.use(express.json());
app.use(morgan("dev"));
app.use(passport.initialize());
passport.use("local", localStrategy);
passport.use("jwt", jwtStrategy);
app.use(cors());

//routes
//app.use(login);
const path = require("path");
app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/api", authRoutes);

app.use("/api", tripRoutes);
//not found handler
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

/// connect to DB
connectDb();

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
