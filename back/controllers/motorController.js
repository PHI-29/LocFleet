const { Motor, Veiculo } = require('../models');

class MotorController {

    async getAll(req, res) {
        try {
            const Motors_resultado = await Motor.findAll();
            return res.status(200).json(Motors_resultado);
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }

    async create(req, res) {
        try {
            console.log('Aqui')
            let veiculo = await Veiculo.findByPk(req.body.VeiculoId);
            console.log(veiculo)
            if (!veiculo) {
                throw new Error("Veiculo não encontrado");
            }
            else {
                let motor_pegar = {
                    nome: req.body.nome
                }

                const motor_resultado = await Motor.create(motor_pegar);
                console.log(motor_resultado)
                console.log('Aqui')
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
