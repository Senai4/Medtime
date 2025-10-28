const connection = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CHAVE_SECRETA = "SEU_SEGREDO_SUPER_SECRETO_PARA_JWT";

// --- Função de LOGIN ---
exports.login = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: "Email e senha são obrigatórios." });
  }

  try {
    // 1. Busca o usuário pelo email no banco
    connection.query(
      "SELECT * FROM usuario WHERE email = ?",
      [email],
      async (err, results) => {
        if (err) {
          console.error("Erro no banco:", err);
          return res.status(500).json({ message: "Erro interno no servidor." });
        }

        // 2. Verifica se o usuário existe
        if (results.length === 0) {
          return res.status(401).json({ message: "Email ou senha inválidos." });
        }

        const usuario = results[0];

        // 3. Compara a senha enviada com a senha criptografada (hash) do banco
        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) {
          return res.status(401).json({ message: "Email ou senha inválidos." });
        }

        // 4. Se a senha está correta, cria um Token JWT
        const token = jwt.sign(
          {
            id: usuario.id_usuario, // Use o nome correto da sua coluna de ID
            nome: usuario.nome,
          },
          CHAVE_SECRETA,
          { expiresIn: "1h" } // Token expira em 1 hora
        );

        // 5. Envia o token para o cliente (Angular)
        return res.status(200).json({
          message: "Login bem-sucedido!",
          token: token,
        });
      }
    );
  } catch (error) {
    console.error("Erro no login:", error);
    return res.status(500).json({ message: "Erro interno no servidor." });
  }
};

// --- Função de CADASTRO (que já fizemos) ---
exports.store = async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res
      .status(400)
      .json({ message: "Todos os campos são obrigatórios." });
  }

  try {
    const hashSenha = await bcrypt.hash(senha, 10);

    connection.query(
      "INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)",
      [nome, email, hashSenha],
      (err, results) => {
        if (err) {
          if (err.code === "ER_DUP_ENTRY") {
            return res
              .status(409)
              .json({ message: "Este email já está cadastrado." });
          }
          console.error("Erro ao cadastrar:", err);
          return res.status(500).json({ message: "Erro interno no servidor." });
        }

        return res.status(201).json({
          message: "Usuário cadastrado com sucesso!",
          userId: results.insertId,
        });
      }
    );
  } catch (error) {
    console.error("Erro ao gerar hash:", error);
    return res.status(500).json({ message: "Erro interno no servidor." });
  }
};
