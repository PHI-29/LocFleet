const { Motor, Veiculo } = require('../models');

class MotorController {

    async getAll(req, res) {
        try {
            const Motors_resultado = await Motor.findAll({
                include:{
                    model:Veiculo
                }
            });
            return res.status(200).json(Motors_resultado);
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }

    async create(req, res) {
        try {
            let veiculo = await Veiculo.findByPk(req.body.VeiculoId);

            if (!veiculo) throw new Error("Veiculo não encontrado");

            else {
                let motor_pegar = {
                    nome: req.body.nome
                }
                const motor_resultado = await Motor.create(motor_pegar);

                await motor_resultado.setVeiculo(veiculo);
                
                return res.status(200).json(motor_resultado);
            }
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }
}
module.exports = new MotorController();
