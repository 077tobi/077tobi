const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use o body-parser para analisar o corpo das requisições
app.use(bodyParser.json());

// Dados dos novos episódios (substitua pelo seu JSON real)
let novosEpisodios = [
  {
    
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
