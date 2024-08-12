const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use o body-parser para analisar o corpo das requisições
app.use(bodyParser.json());

// Dados dos novos episódios (substitua pelo seu JSON real)
let novosEpisodios = [
  {
    "capa": "https://animefire.plus/img/video/grendizer-u/3.webp?v=7",
    "link": "https://s2.lightspeedst.net/s2/mp4_temp/grendizer-u/3/720p.mp4",
    "nome": "Grendizer U - Episódio 3"
  },
  // ... (adicione os outros episódios aqui)
];

// Rota para obter a lista de novos episódios
app.get('/episodios', (req, res) => {
  res.json(novosEpisodios);
});

// Rota para enviar um novo episódio
app.post('/episodios', (req, res) => {
  const novoEpisodio = req.body;
  novosEpisodios.push(novoEpisodio);
  res.json({ message: 'Episódio adicionado com sucesso!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
