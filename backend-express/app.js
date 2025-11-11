const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const db = require('./config/db');
const userRoutes = require("./api/users");

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("API MedTime (Backend) está funcionando!");
});

db.sequelize.sync()
  .then(() => {
    console.log('Tabelas sincronizadas com o banco de dados.');

    app.listen(port, () => {
      console.log(`Backend rodando em http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Erro ao sincronizar as tabelas:', err);
  });
