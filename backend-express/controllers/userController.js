const db = require('../config/db');
const User = db.users;
const bcrypt = require('bcryptjs');


exports.cadastro = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(senha, salt);

    const newUser = await User.create({
      nome: nome,
      email: email,
      senha: hash
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

    const match = await bcrypt.compare(senha, user.senha);
    if (!match) {
      return res.status(401).json({ error: 'Email ou senha inválidos' });
    }

    const userData = user.toJSON();

    res.status(200).json({
      id: userData.id,
      nome: userData.nome,
      email: userData.email,
      perfil: userData.role
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno no login.' });
  }
};
