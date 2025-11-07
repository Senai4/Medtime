const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "26ZK10q2",
  database: "medtime",
});

connection.connect((error) => {
  if (error) {
    console.error("Erro ao conectar ao MySQL:", error);
    return;
  }
  console.log("Conectado ao banco de dados MySQL com sucesso!");
});

module.exports = connection;
