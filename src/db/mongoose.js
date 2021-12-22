// importing mongoose library
const mongoose = require("mongoose");
const chalk = require("chalk");
const dataBase = require("../env/enviournment.local.json").dataBase;

const connectDB = async () => {
  // connecting mongodb
  await mongoose
    .connect(`mongodb://${dataBase}`, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log(chalk.green(`|>_ Connection to DB Completed`));
    })
    .catch(() => {
      console.log(chalk.red(`|>_ Error in Connecting to DB`));
    });
};

const closeDB = async () => {
  await mongoose.connection
    .close()
    .then(() => {
      console.log(chalk.green(`|>_ Closing mongoDB Completed`));
    })
    .catch(() => {
      console.log(chalk.red(`|>_ Error in Closing DB`));
    });
};

module.export = {
  connectDB,
  closeDB,
};
