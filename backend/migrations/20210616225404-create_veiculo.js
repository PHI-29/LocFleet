'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Veiculos', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      modelo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      marca: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ano: {
        allowNull: false,
        type: Sequelize.STRING
      },
      placa: {
        allowNull: false,
        type: Sequelize.STRING
      },
      renavam: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      cor: {
        allowNull: false,
        type: Sequelize.STRING
      },
      km: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ulRevisao: {
        allowNull: false,
        type: Sequelize.STRING
      },
      loc: {
        allowNull: false,
        type: Sequelize.STRING
      },
      valor: {
        allowNull: false,
        type: Sequelize.STRING
      },
      UsuarioId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Usuarios",
          key: "id",
          as: "UsuarioId"
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
