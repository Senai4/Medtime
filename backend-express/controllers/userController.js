const db = require('../config/db');
const User = db.users;

exports.cadastro = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const newUser = await User.create({
      nome: nome,
      email: email,
      senha: senha
    });

    res.status(201).json(newUser);

  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ error: 'Este e-mail já está cadastrado.' });
    }
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;

  try {

    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(401).json({ error: 'Email ou senha inválidos' });
    }

    if (senha !== user.senha) {
      return res.status(401).json({ error: 'Email ou senha inválidos' });
    }

    res.status(200).json({ message: 'Login bem-sucedido' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno no login.' });
  }
};
