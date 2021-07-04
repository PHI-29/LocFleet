const { Usuario, Veiculo, Motor } = require('../models');

class UsuarioController {
    //Pegar um veículo especifico pelo id
    async getOne(req, res) {
        try {
            const usuario_resultado = await Usuario.findByPk(req.params.id, {
                include: {  
                    model: Veiculo,
                    include: {model: Motor}
                },
            });
            return res.status(200).json(usuario_resultado);
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




    //Fazer um update no veículo o selecionando pelo id
    async update(req, res) {
        try {
            const usuario_updated = await Usuario.findByPk(req.params.id);
            if (usuario_updated) {
                await usuario_updated.update(req.body);
                return res.status(200).json(usuario_updated)
            }
            else {
                return res.status(400).json({ mensagem: 'Usuário não encontrada' });
            }
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }




    //Deletar um veículo o selecionando pelo id
    async delete(req, res) {
        try {
            const usuario_delete = await Usuario.findByPk(req.params.id);
            if (usuario_delete) {
                await usuario_delete.destroy();
                return res.status(200).json(usuario_delete)
            }
            else {
                return res.status(400).json({ mensagem: 'Usuário não encontrada' });
            }
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }
}
module.exports = new UsuarioController()