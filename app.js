const axios = require("axios");
const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  res.send({ message: "Home Page" });
});
app.get("/1", async (req, res) => {
  const resData = await axios.get("https://www.tradingview.com/chart/?symbol=NSE%3ANIFTY");
  res.send(resData.data);
});
app.get("/2", async (req, res) => {
  const resData = await axios.get("https://www.tradingview.com/chart/?symbol=NSE%3ABANKNIFTY");
  res.send(resData.data);
});
app.get("/3", async (req, res) => {
  const resData = await axios.get("https://www.tradingview.com/chart/?symbol=NSE%3AINDIAVIX");
  res.send(resData.data);
});
app.get("/4", async (req, res) => {
  const resData = await axios.get("https://www.tradingview.com/chart/?symbol=NSE%3AHDFCBANK");
  res.send(resData.data);
});
app.get("/5", async (req, res) => {
  const resData = await axios.get("https://www.tradingview.com/chart/?symbol=NSE%3ARELIANCE");
  res.send(resData.data);
});
app.get("/6", async (req, res) => {
  const resData = await axios.get("https://www.tradingview.com/chart/?symbol=BLACKBULL%3AUS30");
  res.send(resData.data);
});

app.listen(8465, () => {
  console.log("Server running");
});
