'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Motors', { 
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type:Sequelize.INTEGER
      },
      nome:{
        allowNull: false,
        type:Sequelize.STRING
      },/* 
      sobrenome:{
        allowNull: false,
        type:Sequelize.STRING
      },
      email:{
        allowNull: false,
        type:Sequelize.STRING
      },
      idade:{
        allowNull: false,
        type:Sequelize.INTEGER
      },
      cidade:{
        allowNull: false,
        type:Sequelize.STRING
      },
      numero:{
        allowNull: false,
        type:Sequelize.INTEGER
      },
      cnh:{
        allowNull: false,
        type:Sequelize.INTEGER
      }, */
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
