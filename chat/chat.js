const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function getChatbotResponse(message) {
    const chatCompletion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages:[
            {role: 'user', content: message },
        ]
    })
    console.log(chatCompletion.data.choices[0].message.content)
  // Lógica de resposta do chatbot
  // Você pode usar bibliotecas de processamento de linguagem natural, como o 'axios' para fazer chamadas à API de IA

  // Exemplo simples: retorna a mesma mensagem do usuário, mas em maiúsculas
  const response = chatCompletion.data.choices[0].message.content
  return (response);
}




module.exports = {
    getChatbotResponse
}


//function conversa(mensagemcliente){
  //  return "Olá sou um chatbot"
//}