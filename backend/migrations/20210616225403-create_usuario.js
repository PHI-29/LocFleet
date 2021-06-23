'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuarios', { 
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type:Sequelize.INTEGER
      },
      email:{
        allowNull: false,
        type:Sequelize.STRING
      },
      nome:{
        allowNull: false,
        type:Sequelize.STRING
      },
      sobrenome:{
        allowNull: false,
        type:Sequelize.STRING
      },
      dtNascimento:{
        allowNull: false,
        type:Sequelize.DATE
      },
      cpf:{
        allowNull: false,
        type:Sequelize.BIGINT
      },
      telefone:{
        allowNull: true,
        type:Sequelize.BIGINT
      },
      celular:{
        allowNull: false,
        type:Sequelize.BIGINT
      },
      senha:{
        allowNull: false,
        type:Sequelize.STRING
      },
      createdAt:{
        allowNull: false,
        type:Sequelize.DATE
      },
      updatedAt:{
        allowNull: false,
        type:Sequelize.DATE
      }
    });
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
