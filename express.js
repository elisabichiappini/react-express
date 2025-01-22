//modulo dotenv
const dotenv = require("dotenv");
dotenv.config();

//modulo express
const express = require("express");
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

get 