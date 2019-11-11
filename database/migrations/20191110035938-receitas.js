module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Receita', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      active: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      recipe: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.fn('current_timestamp')
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.fn('current_timestamp')
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Receita');
  }
};