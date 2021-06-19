const { Usuario, Veiculo, Motor } = require('../models/');

class UsuarioController {

    async getAll(req, res) {
        try {
            const Usuarios_resultado = await Usuario.findAll({
                include:{
                    model:Veiculo,
                    include:{
                        model:Motor
                    }
                }
            });
            return res.status(200).json(Usuarios_resultado);
        }
        catch (err) {
            return res.status(400).json({ error: err});
        }
    }

    async create(req, res) {
        try {
            const Usuario_resultado = await Usuario.create(req.body);
            return res.status(200).json(Usuario_resultado);
        }
        catch(err) {
            return res.status(400).json({error: err});
        }
    }
}
module.exports = new UsuarioController()