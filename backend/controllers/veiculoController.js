const { Veiculo, Usuario, Motor } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op

class VeiculoController {
    //Pegar todos os veículos
    async getAll(req, res) {
        try {
            const Veiculos_resultado = await Veiculo.findAll({
                include: {
                    model: Motor
                }
            });
            return res.status(200).json(Veiculos_resultado);
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }




    //Pegar um veículo especifico pelo id
    async getOne(req, res) {
        try {
            const Veiculos_resultado = await Veiculo.findByPk(req.params.id, {
                include: {
                    model: Motor
                }
            });
            return res.status(200).json(Veiculos_resultado);
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }




    //Pegar todos os veículos pelo modelo
    async getAllModelo(req, res) {
        try {
            let search = req.params.modelo

            let query = '%' + search + '%';
            console.log('AQUI')
            console.log(query)
            let veiculo_search = await Veiculo.findAll({
                include: { model: Motor },
                where: {
                    modelo: { [Op.like]: query },
                }
            })

            return res.status(200).json(veiculo_search)
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }




    //Adicionar um veículo.
    async create(req, res) {
        const findVeiculo = await Veiculo.findOne({
            where: { placa: req.body.placa }
        })
        try {
            if (!findVeiculo) {
                let veiculo_pegar = {
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
                    //UsuarioId: usuario_cod['dataValues']['id']

                }
                const Veiculo_resultado = await Veiculo.create(veiculo_pegar);
                return res.status(200).json(Veiculo_resultado);
            } else {
                return res.status(400).json({ mensagem: "Este veículo já está cadastrado" });
            }
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }




    //Fazer um update no veículo o selecionando pelo id
    async update(req, res) {
        try {
            const veiculo_updated = await Veiculo.findByPk(req.params.id);
            if (veiculo_updated) {
                await veiculo_updated.update(req.body);
                return res.status(200).json(veiculo_updated)
            }
            else {
                return res.status(400).json({ mensagem: 'Veículo não encontrada' });
            }
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }




    //Deletar um veículo o selecionando pelo id
    async delete(req, res) {
        try {
            const veiculo_delete = await Veiculo.findByPk(req.params.id);
            if (veiculo_delete) {
                await veiculo_delete.destroy();
                return res.status(200).json(veiculo_delete)
            }
            else {
                return res.status(400).json({ mensagem: 'Veiculo não encontrada' });
            }
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }
}
module.exports = new VeiculoController();
