const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// Указываем путь к файлу cicd.html
const cicdPagePath = path.join(__dirname, 'cicd.html');

// Обработка GET запроса на страницу с описанием CI/CD
app.get('/cicd', (req, res) => {
  res.sendFile(cicdPagePath);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App listening at http://0.0.0.0:${port}`);
});

