const axios = require("axios");
const express = require("express");
const translate = require("@vitalets/google-translate-api");
const app = express();
app.use(express.json());
app.get("/", async (req, res) => {
  const query = req?.query;
  if(query.q && query.from && query.to){
    translate(query.q, { from: query.from, to: query.to })
    .then((response) => {
      return res.json({ text: response?.text });
    })
    .catch((err) => {
      return res.json({
        err,
      });
    });
  }else{
    return res.json({
      error:"q,from,to"
    })
  }
});
app.listen(3000, (data, err) => {
  console.log(`app is running on 3000`);
});
