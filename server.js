
const cors = require("cors");
const express = require("express");
const app = express();
const axios = require("axios");

app.use(cors());

app.get("/", async (req, res) => {
  try {
    //response é a resposta do axios, Mas eu tiro o data de dentro do response
    const  { data } = await axios("https://swapi.dev/api/films/2");

    return res.json({
      Titulo: data.title,
      Epsodio:data.episode_id,
      Diretor: data.director,
      Produtor:data.producer,
      Lançado: data.release_date
    });
  } catch (error) {
    console.error(error);
  }
});

app.listen("3333");
