const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simulasi data kereta
app.get('/', (req, res) => {
  res.json({
    message: "Wahdah Fleet System Operational - Auto Deploy Berjaya!",
    region: process.env.FLY_REGION || "local", // Tunjuk server mana yang jawab
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});