const express = require('express');
const app = express();
const port = 3000;

// Middleware para lidar com requisições JSON
app.use(express.json());
