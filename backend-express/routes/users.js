const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController"); // Importa o controller

// Rota para cadastro
// POST http://localhost:3000/users/cadastro
router.post("/cadastro", userController.store);

// Rota para login
// POST http://localhost:3000/users/login
router.post("/login", userController.login);

module.exports = router;
