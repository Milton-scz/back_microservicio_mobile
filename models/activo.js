const mongoose = require("mongoose");

const activoSchema = new mongoose.Schema({
    nombre: {
        type: String
    },
    descripcion: {
        type: String
    },
    fechaAdquisicion: {
        type: String
    },
    precio: {
        type: String
    },
    estado: {
        type: String
    },
    categoria: {
        type: Object,
        ref: 'Categoria'
    },
    urlPhoto: {
        type: String
    }
});

const activo = mongoose.model("activo", activoSchema);

module.exports = activo;
