const { Motor, Veiculo } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op


class MotorController {
    //Pegar todos os motoristas
    async getAll(req, res) {
        try {
            const Motors_resultado = await Motor.findAll({
                include: {
                    model: Veiculo
                }
            });
            return res.status(200).json(Motors_resultado);
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }




    //Pegar um motorista especifico pelo id
    async getOne(req, res) {
        try {
            const motorista_resultado = await Motor.findByPk(req.params.id, {
                include: {
                    model: Veiculo
                }
            });
            return res.status(200).json(motorista_resultado);
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }




    //Pegar todos os motorista pelo nome
    async getAllName(req, res) {
        try {
            let search = req.params.nome

            let query = '%' + search + '%';

            let motorista_search = await Motor.findAll({
                include: { model: Veiculo },
                where: {
                    nome: { [Op.like]: query },
                }
            })

            return res.status(200).json(motorista_search)
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }




    //Adicionar um motorista
    async create(req, res) {
        const findMotor = await Motor.findOne({
            where: { email: req.body.email }
        })
        try {
            if (!findMotor) {
                const motorista_get = {
                    email: req.body.email,
                    nome: req.body.nome,
                    sobrenome: req.body.sobrenome,
                    dtNascimento: req.body.dtNascimento,
                    cpf: Number(req.body.cpf),
                    tel: Number(req.body.tel),
                    cel: Number(req.body.cel),
                    dtEmissao: req.body.dtEmissao,
                    dtvencimento: req.body.dtvencimento,
                    numCNH: req.body.numCNH,
                    cep: Number(req.body.cep),
                }

                const motor_resultado = await Motor.create(motorista_get);
                return res.status(200).json(motor_resultado);
                
            } else {
                return res.status(400).json({ mensagem: "Este e-mail já está cadastrado" });
            }
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }




    //Fazer um update no motorista o selecionando pelo id
    async update(req, res) {
        try {
            const motorista_updated = await Motor.findByPk(req.params.id);
            if (motorista_updated) {
                await motorista_updated.update(req.body);
                return res.status(200).json(motorista_updated)
            }
            else {
                return res.status(400).json({ mensagem: 'Motorista não encontrada' });
            }
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }




    //deletar um motorista o selecionando pelo id
    async delete(req, res) {
        try {
            const motorista_delete = await Motor.findByPk(req.params.id);
            console.log(motorista_delete)
            if (motorista_delete) {
                await motorista_delete.destroy();
                return res.status(200).json(motorista_delete)
            }
            else {
                return res.status(400).json({ mensagem: 'Motorista não encontrado' });
            }
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }
}
module.exports = new MotorController();