const express = require("express");
const cors = require("cors");

// Importa nossas rotas
const userRoutes = require("./routes/users");

const app = express();
const port = 3000; // O backend vai rodar na porta 3000

// === Middlewares ===
// Permite que o Angular acesse esta API
app.use(cors());
// Permite que o servidor entenda JSON
app.use(express.json());

// === Rotas ===
// Diz ao app que qualquer rota que comece com /users deve usar o arquivo 'users.js'
app.use("/users", userRoutes);

// Rota de teste
app.get("/", (req, res) => {
  res.send("API MedTime (Backend) está funcionando!");
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Backend rodando em http://localhost:${port}`);
});
