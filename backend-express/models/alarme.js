module.exports = (sequelize, DataTypes) => {
  const Alarme = sequelize.define('Alarme', {

    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dose: {
      type: DataTypes.STRING
    },
    horaI: {
      type: DataTypes.STRING,
      allowNull: false
    },
    intervalo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duracao: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Alarme;
};
