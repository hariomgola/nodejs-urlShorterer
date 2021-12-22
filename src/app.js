// importing librarier
const express = require("express");
const chalk = require("chalk");
const urlRouter = require("./routers/Url");

// creating const variable
const app = express();
const port = process.env.PORT || 3000;

// setting express parameter
app.use(express.json());
app.use(urlRouter);

// starting Application
const startApplication = () => {
  app.listen(port, () => {
    console.log(chalk.yellow(`|>_ Server is up and running at ${port}`));
  });
};

startApplication();
