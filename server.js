require('dotenv').config();
const express = require('express');
// Inicializa o servidor Express
const app = express();
const port = 3000;
// Configura as rotas da aplicação e habilita o uso dos dados JSON no corpo das
app.use(express.json());

app.post('/chat', async (req, res) => {
  const message = req.body.message;
 
  // Aqui você pode chamar a API de inteligência artificial para obter a resposta
  // Substitua esta lógica com a chamada real à API de IA

  const response = getChatbotResponse(message);

  res.json({ response });
});

function getChatbotResponse(message) {
  // Lógica de resposta do chatbot
  // Você pode usar bibliotecas de processamento de linguagem natural, como o 'axios' para fazer chamadas à API de IA

  // Exemplo simples: retorna a mesma mensagem do usuário, mas em maiúsculas
  return message.toUpperCase();
}

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
