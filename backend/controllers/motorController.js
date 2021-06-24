const { Motor, Veiculo } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op


class MotorController {

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




    //encontrar motorista(s) pelo nome
    async getAllName(req, res) {
        try {
            let search = req.params.nome

            let query = '%'+search+'%';
            
            let motorista_search = await Motor.findAll({
                include: { model: Veiculo },
                where: {
                    nome: {[Op.like]: query },
                }
            })

            return res.status(200).json(motorista_search)
        }
        catch (e) {
            return res.status(400).json({ error: ' não rolou' });
        }
    }




    //Criar um novo motorista
    async create(req, res) {
        try {
            let veiculo = await Veiculo.findByPk(req.body.VeiculoId);

            //if (!veiculo){ throw new Error("Veiculo não encontrado");}
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

            await motor_resultado.setVeiculo(veiculo);

            return res.status(200).json(motor_resultado);

        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }
}

module.exports = new MotorController();