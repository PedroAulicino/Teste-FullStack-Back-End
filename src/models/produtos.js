const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    nome_produto: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    preco_produto: {
      type: String,
      required: true,
    },
    quantidade_produto: {
      type: String,
      required: true,
    },
    img_produto: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const produtos = mongoose.model("Produtos", DataSchema);
module.exports = produtos;
