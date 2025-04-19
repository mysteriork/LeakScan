const mongoose = require("mongoose");

const datamodel = new mongoose.Schema(
  {
    name: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

const Modell = mongoose.model("user", datamodel);
module.exports = Modell;
