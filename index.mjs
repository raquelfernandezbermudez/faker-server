//const express = require("express");
import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("Main");
});

app.get("/account", function (req, res) {
  res.send("Aquí se listarán las cuentas");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
