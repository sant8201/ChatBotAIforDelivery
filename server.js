require('dotenv').config();
const express = require('express');
const chat = require('./chat/chat');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/chat', async (req, res) => {
  const message = req.body.message;
  
  try {
    const response = await chat.getChatbotResponse(message);
    res.json(response);
  } catch (error) {
    console.error('Erro ao obter a resposta do chatbot:', error);
    res.status(500).json({ error: 'Erro ao processar a solicitação' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

