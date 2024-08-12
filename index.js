const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use o body-parser para analisar o corpo das requisições
app.use(bodyParser.json());

// Dados dos novos episódios (substitua pelo seu JSON real)
let novosEpisodios = [
  {
    "nome": "One Piece Episodio 1121",
    "capa": "7f6ffaa6bb0b408017b62254211691b5.jpg",
    "link": "https://get.atv2.net/m.php?token=ZXdkUWJma2tQOW5uOVhnTUJ3RkFWcnZhU3ZCbkgrQzFCYTFYU3BsT2h5TVcrK0hXZWFpRUFCNzhHYjVKNnYrc05OandMQXVqZTltSzBVOURNdEpYcnp5RytUVzRpd0NGWFM2WVJTN2NnV2k4QkVQTjhtakRqeUZUdU1KOGcrUURDdHJnRi9yWUNCT0pyQUE2VkFzUEFOMWlzTnFIeEVSMS9yZE00Ri82clZFUThJQzhQNkFmUXpsdDZTL3dhQ01V&qh=sd" 
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
