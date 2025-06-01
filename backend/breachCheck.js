const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

router.get("/check/:input", async (req, res) => {
  const { input } = req.params;

  const url = `${process.env.LEAKCHECK_API}?check=${input}`;

  console.log("Fetching data for:",input); 
  try {
    const response = await axios.get(url);
   
    if (response.status == 200) {
      const data = response.data;
      if (data.success && data.found) {
        return res.json({ breached: true, breaches: data });
      } else {
        res.json({ message: "no breaches happened..." });
      }
    } else {
      res.json({ message:  "Error fetching data" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "error getting data", error: error.message });
  }
});

module.exports = router;
