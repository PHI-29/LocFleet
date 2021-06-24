const { Veiculo, Usuario, Motor } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op

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
            return res.status(200).json(Veiculos_resultado);
        }
        catch (err) {
            return res.status(400).json({ error: err});
        }
    }




    //encontrar veiculo(s) pelo modelo
    async getAllModelo(req, res) {
        try {
            let search = req.params.modelo
            
            let query = '%'+search+'%';
            console.log('AQUI')
            console.log(query)
            let veiculo_search = await Veiculo.findAll({
                include: { model: Motor },
                where: {
                    modelo: {[Op.like]: query },
                }
            })
            
            return res.status(200).json(veiculo_search)
        }
        catch (e) {
            return res.status(400).json({ error: ' não rolou' });
        }
    }




    //Post para criar um veículo.
    async create(req, res) {
        try {
            
            let usuario_id = await Usuario.findByPk(req.body.UsuarioId);

            let veiculo_pegar
            
            if (usuario_id){
                veiculo_pegar = {
                    modelo: req.body.modelo,
                    marca: req.body.marca,
                    ano: req.body.ano,
                    placa: req.body.placa,
                    renavam: req.body.renavam,
                    cor: req.body.cor,
                    km: req.body.km,
                    ulRevisao: req.body.ulRevisao,
                    loc: req.body.loc,
                    valor: req.body.valor,
                    UsuarioId: usuario_cod['dataValues']['id']
                }
                
            }
            else{
                veiculo_pegar = {
                    modelo: req.body.modelo,
                    marca: req.body.marca,
                    ano: req.body.ano,
                    placa: req.body.placa,
                    renavam: req.body.renavam,
                    cor: req.body.cor,
                    km: req.body.km,
                    ulRevisao: req.body.ulRevisao,
                    loc: req.body.loc,
                    valor: req.body.valor,
                }
                console.log('aqui')
            }
            console.log(veiculo_pegar)
            const Veiculo_resultado = await Veiculo.create(veiculo_pegar);
                return res.status(200).json(Veiculo_resultado);
            
        }
        catch (err) {
            return res.status(400).json({ error: err});
        }
    }
}
module.exports = new VeiculoController();
