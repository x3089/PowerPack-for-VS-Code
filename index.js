const express = require('express');
const app = express();
const port = 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola, PowerPack para VS Code está en marcha!');
});

// Ruta para verificar el estado
app.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Servidor funcionando correctamente',
    serverTime: new Date()
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
