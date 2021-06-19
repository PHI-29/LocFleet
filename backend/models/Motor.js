module.exports = (sequelize, Sequelize) => {
    const Motor = sequelize.define("Motor", {
        nome: Sequelize.STRING
    });
    Motor.associate = (models) => {
        Motor.belongsTo(models.Veiculo, {
            foreignKey: 'VeiculoId'
        });
    };

    return Motor;
};