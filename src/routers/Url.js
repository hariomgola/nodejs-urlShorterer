// importing libraries
const express = require("express");
const Url = require("../model/Url");
const chalk = require("chalk");

// creating router
const router = new express.Router();

/**
 * Create new url functiuonality
 */
router.post("/Url", async (req, res) => {
  console.log(chalk.green(`\>_ create new URL is called `));
  const url = new Url(req.body);
  try {
    let _url = await url.save();
    res.status(200).send({
      code: 200,
      data: _url,
    });
  } catch (e) {
    console.log(chalk.red(`\>_ create new URL error`));
    Response.status(400).send(e);
  }
});

// exporting router functionality
module.exports = router;
