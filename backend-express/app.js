const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/users");
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());
app.use("/users", userRoutes);
app.get("/", (req, res) => {
  res.send("API MedTime (Backend) está funcionando!");
});
app.listen(port, () => {
  console.log(`Backend rodando em http://localhost:${port}`);
});
