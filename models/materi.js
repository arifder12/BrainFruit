const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Materi = sequelize.define('materi', {
        nama: {
            type: Sequelize.STRING,
        },
        gambar: {
            type: Sequelize.STRING,
        },
        suara: {
            type: Sequelize.STRING,
        },

    });
    return Materi;
}