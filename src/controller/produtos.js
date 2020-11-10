const produtos = require("../models/produtos");
const Produto = require("../models/produtos");

module.exports = {
  async index(req, res) {
    let query = {};
    if (req.query.nome_produto) {
      let nome_produto = new RegExp(req.query.nome_produto, "i");
      query.$or = [
        {
          nome_produto: nome_produto,
        },
      ];
    }
    Produto.find(query, null, { limit: 10 }, (err, produtos) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Error");
      }
      return res.status(200).json(produtos);
    });
  },
  async create(req, res) {
    const {
      nome_produto,
      descricao,
      preco_produto,
      quantidade_produto,
      img_produto,
    } = req.body;

    let data = {};

    let user = await Produto.findOne({ nome_produto });

    if (!user) {
      data = {
        nome_produto,
        descricao,
        preco_produto,
        quantidade_produto,
        img_produto,
      };
      user = await Produto.create(data);
      return res.status(200).json(user);
    } else {
      return res.status(500).json(user);
    }
  },
  async details(req, res) {
    const { _id } = req.params;
    const user = await Produto.findOne({ _id });
    res.json(user);
  },
  async delete(req, res) {
    const { _id } = req.params;
    const user = await Produto.findByIdAndDelete({ _id });
    res.json(user);
  },
  async update(req, res) {
    const { _id } = req.params;
    const data = ({
      nome_produto,
      descricao,
      preco_produto,
      quantidade_produto,
      img_produto,
    } = req.body);

    const user = await Produto.findOneAndUpdate({ _id }, data, { new: true });

    res.json(user);
  },
};
