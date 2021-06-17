const { Veiculo, Usuario, Motor } = require('../models');

class VeiculoController {

    async getAll(req, res) {
        try {
            const Veiculos_resultado = await Veiculo.findAll({
                include:{
                    model:Motor
                }
            });
            return res.status(200).json(Veiculos_resultado);
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }

    async create(req, res) {
        try {
            let usuario = await Usuario.findByPk(req.body.UsuarioId);
            console.log(usuario.length)
            if (!usuario) {
                throw new Error("Usuario não encontrado");
            }
            else {
                let veiculo_pegar = {
                    placa: req.body.placa
                }

                const Veiculo_resultado = await Veiculo.create(veiculo_pegar);
                console.log(Veiculo_resultado)
                console.log('Aqui')
                await Veiculo_resultado.setUsuario(usuario);
                return res.status(200).json(Veiculo_resultado);

            }
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }
}
module.exports = new VeiculoController();
