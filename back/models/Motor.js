module.exports = (sequelize, Sequelize) => {
    const Motor = sequelize.define("Motor", {
        nome: Sequelize.STRING
    });
    Motor.associate = (models) =>{
        Motor.belongsTo(models.Veiculo,{
            foreignKey: 'VeiculoId'
        });
    };
    
    return Motor;
};









/* Motor.associate = (models) =>{
    Motor.belongsToMany(models.Veiculo,{
        through: 'MotorVeiculoUsuarios'
    });
}; */