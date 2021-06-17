module.exports = (sequelize, Sequelize) => {
    const Veiculo = sequelize.define("Veiculo", {
        placa: Sequelize.STRING
    });
    Veiculo.associate = (models) =>{
        Veiculo.belongsTo(models.Usuario,{
            foreignKey: 'UsuarioId'
        });
    };
    Veiculo.associate = (models) =>{
        Veiculo.hasMany(models.Motor,{
            foreignKey: 'VeiculoId'
        });
    };
    return Veiculo;
};











/* Veiculo.associate = (models) =>{
    Veiculo.belongsToMany(models.Motor,{
        through: 'MotorVeiculoUsuarios'
    });
}; */