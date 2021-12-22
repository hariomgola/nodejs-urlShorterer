// importing libraries
const mongoose = require("mongoose");
const shortid = require("shortid");
const validator = require("validator");

// creating url schema
const urlSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: shortid.generate(),
    },
    url: {
      type: String,
      required: true,
      validate(url) {
        if (!validator.isURL(url)) {
          throw new Error(`|>_ Please provide a valid url address`);
        }
      },
    },
  },
  {
    timestamps: true,
  }
);

// creating a mongoose model
const Url = mongoose.model("User", urlSchema);

// exporting this functionality
module.exports = Url;
