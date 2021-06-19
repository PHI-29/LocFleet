module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("Usuario", {
        nome: Sequelize.STRING,
        email: Sequelize.STRING
    });
    Usuario.associate = (models) => {
        Usuario.hasMany(models.Veiculo, {
            foreignKey: 'UsuarioId'
        });
    };
    return Usuario;
};