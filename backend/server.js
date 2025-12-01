const express = require("express");
const cors = require("cors");
const sendEmail = require("./sendEmail");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/enviar-formulario", sendEmail);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
