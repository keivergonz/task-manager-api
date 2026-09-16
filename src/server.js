const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Servidor funcionando bien' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});