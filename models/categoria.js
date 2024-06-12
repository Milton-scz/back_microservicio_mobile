const mongoose = require("mongoose");

const categoriaSchema = new mongoose.Schema({
    nombre: {
        type: String
    },
    descripcion: {
        type: String
    }
});

const Categoria = mongoose.model("categoria", categoriaSchema);

module.exports = Categoria;