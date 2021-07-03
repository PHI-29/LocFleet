module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("Usuario", {
      email: Sequelize.STRING,
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      dtNascimento: Sequelize.STRING,
      cpf: Sequelize.BIGINT,
      telefone: Sequelize.BIGINT,
      celular: Sequelize.BIGINT,
      senha: Sequelize.STRING
    });
    Usuario.associate = (models) => {
        Usuario.hasMany(models.Veiculo, {
            foreignKey: 'UsuarioId'
        });
    };
    return Usuario;
};