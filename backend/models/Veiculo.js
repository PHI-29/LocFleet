module.exports = (sequelize, Sequelize) => {
    const Veiculo = sequelize.define("Veiculo", {
        modelo: Sequelize.STRING,
        marca: Sequelize.STRING,
        ano: Sequelize.STRING,
        placa: Sequelize.STRING,
        renavam: Sequelize.BIGINT,
        cor: Sequelize.STRING,
        km: Sequelize.INTEGER,
        ulRevisao: Sequelize.STRING,
        loc: Sequelize.STRING,
        valor: Sequelize.STRING
    });
    Veiculo.associate = (models) => {
        Veiculo.belongsTo(models.Usuario, {
            foreignKey: 'UsuarioId'
        });
    };
    Veiculo.associate = (models) => {
        Veiculo.hasMany(models.Motor, {
            foreignKey: 'VeiculoId'
        });
    };
    return Veiculo;
};
