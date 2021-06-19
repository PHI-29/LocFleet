const { Veiculo, Usuario, Motor } = require('../models');

class VeiculoController {

    // Get para pegar todos os veículos e seu motorista
    async getAll(req, res) {
        try {
            const Veiculos_resultado = await Veiculo.findAll({
                include: {
                    model: Motor
                }
            });
            console.log(Veiculos_resultado)
            return res.status(200).json(Veiculos_resultado);
        }
        catch (err) {
            return res.status(400).json({ error: err});
        }
    }


    // Get para pegar um veículo especifico pelo id recebido pelo parametro e seu motorista
    async getOne(req, res) {
        try {
            const Veiculos_resultado = await Veiculo.findByPk(req.params.id,{
                include:{
                    model:Motor
                }
            });
            console.log(Veiculos_resultado)
            return res.status(200).json(Veiculos_resultado);
        }
        catch (err) {
            return res.status(400).json({ error: err});
        }
    }


    //Post para criar um veículo.
    async create(req, res) {
        try {
            let usuario_cod = await Usuario.findByPk(req.body.UsuarioId);

            if (!usuario_cod) throw new Error("Usuario não encontrado");

            else {
                let veiculo_pegar = {
                    placa: req.body.placa,
                    UsuarioId: usuario_cod['dataValues']['id']
                }
                const Veiculo_resultado = await Veiculo.create(veiculo_pegar);
                return res.status(200).json(Veiculo_resultado);
            }
        }
        catch (err) {
            return res.status(400).json({ error: err});
        }
    }
}
module.exports = new VeiculoController();
