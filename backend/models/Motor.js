module.exports = (sequelize, Sequelize) => {
    const Motor = sequelize.define("Motor", {
        email: Sequelize.STRING,
        nome: Sequelize.STRING,
        sobrenome: Sequelize.STRING,
        dtNascimento: Sequelize.STRING,
        cpf: Sequelize.BIGINT,
        tel: Sequelize.BIGINT,
        cel: Sequelize.BIGINT,
        dtEmissao: Sequelize.STRING,
        dtvencimento: Sequelize.STRING,
        numCNH: Sequelize.BIGINT,
        cep: Sequelize.INTEGER,
    });
    Motor.associate = (models) => {
        Motor.belongsTo(models.Veiculo, {
            foreignKey: 'VeiculoId'
        });
    };

    return Motor;
};