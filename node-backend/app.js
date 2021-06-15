const express = require("express");
const cors = require("cors");

const customerRouter = require("./routes/customerRoutes");
const AppError = require("./utils/appError");
const globalErrorController = require("./controllers/errorController");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/", customerRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorController);

module.exports = app;
