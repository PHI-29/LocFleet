const { Motor, Veiculo } = require('../models');

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
            const motorista_resultado = await Motor.findByPk(req.params.id,{
                include:{
                    model:Veiculo
                }
            });
            console.log(motorista_resultado)
            return res.status(200).json(motorista_resultado);
        }
        catch (err) {
            return res.status(400).json({ error: err});
        }
    }

    async create(req, res) {
        try {
            let veiculo = await Veiculo.findByPk(req.body.VeiculoId);
            
            //if (!veiculo){ throw new Error("Veiculo não encontrado");}
            console.log( 'aqui')
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
                    cep:  Number(req.body.cep),
                }
                console.log( motorista_get)
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
