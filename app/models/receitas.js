module.exports = (sequelize, DataTypes) => {
    const Receita = sequelize.define('Receita', {
      name: DataTypes.STRING,
      active: DataTypes.INTEGER,
      recipe: DataTypes.TEXT,
    });
  
    return Receita;
  } 