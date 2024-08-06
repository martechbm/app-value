const express = require('express');
const app = express();
const port = 3000;

// Middleware para lidar com requisições JSON
app.use(express.json());

// Rota para receber as informações do usuário
app.post('/calculate', (req, res) => {
    // Lógica para calcular o custo do aplicativo com base nas informações recebidas
    const { quality, appType, design, revenue, login, website, profile, admin, languages, projectStage } = req.body;
  
    // Utilizar o Sequelize para interagir com o banco de dados PostgreSQL
    // e calcular o custo estimado
  
    // Enviar a resposta de volta para o frontend
    res.json({ estimatedCost: 1000 }); // Exemplo de resposta
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
