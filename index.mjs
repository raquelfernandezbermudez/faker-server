// const express = require('express')
import express from "express";
import { faker } from "@faker-js/faker";
const app = express();
function createAccount() {
  const nombre = faker.person.fullName();
  const email = faker.internet.email();
  const direccion = faker.location.streetAddress();
  const edad = Number(faker.number.bigInt({ min: 18n, max: 99n }));
  return { nombre, email, direccion, edad };
}
function createAccounts(n) {
  const accounts = [];
  for (let i = 0; i < n; i++) {
    accounts.push(createAccount());
  }
  return accounts;
}
// creo 30 cuentas falsas
const accounts = createAccounts(30);
app.get("/", function (req, res) {
  res.send("Hola Mundo");
});
app.get("/accounts", function (req, res) {
  // const accountTexto = JSON.stringify(accounts)
  // res.send(accountTexto)
  res.json(accounts);
});
app.listen(3000, function () {
  console.log("Example app listening on port 3001!");
});
