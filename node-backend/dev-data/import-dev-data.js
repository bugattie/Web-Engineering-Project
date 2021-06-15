const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const Customer = require("../models/customerModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"));

const customers = JSON.parse(
  fs.readFileSync(`${__dirname}/customers.json`, "utf-8")
);

const importDaTa = async () => {
  try {
    await Customer.create(customers);
    console.log("Data successfully loaded");
    process.exit(1);
  } catch (err) {
    console.error("ERROR 💥", err);
  }
};

const deleteData = async () => {
  try {
    await Customer.deleteMany();
    console.log("Data successfully deleted");
    process.exit(1);
  } catch (err) {
    console.error("ERROR 💥", err);
  }
};

if (process.argv[2] === "--import") {
  importDaTa();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
