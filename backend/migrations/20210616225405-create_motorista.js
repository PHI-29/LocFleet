'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Motors', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sobrenome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dtNascimento: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cpf: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      tel: {
        allowNull: true,
        type: Sequelize.BIGINT
      },
      cel: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      dtEmissao: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dtvencimento: {
        allowNull: false,
        type: Sequelize.STRING
      },
      numCNH: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      cep: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      VeiculoId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Veiculos",
          key: "id",
          as: "VeiculoId"
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
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
