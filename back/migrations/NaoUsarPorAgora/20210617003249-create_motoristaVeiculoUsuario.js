'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MotorVeiculoUsuarios', { 
      Motorid: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: "Motors",
          key: "id",
          as: "MotorId"
        }
      },
      Veiculoid: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: "Veiculos",
          key: "id",
          as: "VeiculoId"
        }
      },
      Usuarioid: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: "Usuarios",
          key: "id",
          as: "UsuarioId"
        }
      }
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
