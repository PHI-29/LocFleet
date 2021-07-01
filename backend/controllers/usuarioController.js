const { Usuario, Veiculo, Motor } = require('../models');

class UsuarioController {

    async getAll(req, res) {
        try {
            const Usuarios_resultado = await Usuario.findAll({
                include: {
                    model: Veiculo,
                    include: {
                        model: Motor
                    }
                }
            });
            return res.status(200).json(Usuarios_resultado);
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }




    async create(req, res) {
        const findUser = await Usuario.findOne({
            where: { email: req.body.email }
        })
        try {
            if (!findUser) {
                const usuario_get = {
                    email: req.body.email,
                    nome: req.body.nome,
                    sobrenome: req.body.sobrenome,
                    dtNascimento: req.body.dtNascimento,
                    cpf: Number(req.body.cpf),
                    telefone: Number(req.body.telefone),
                    celular: Number(req.body.celular),
                    senha: req.body.senha,
                }
                
                const Usuario_resultado = await Usuario.create(usuario_get);
                return res.status(200).json(Usuario_resultado);

            } else {
                return res.status(400).json({ mensagem: "Este e-mail já está cadastrado" });
            }
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }

}
module.exports = new UsuarioController()