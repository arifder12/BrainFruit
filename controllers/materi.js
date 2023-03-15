const db = require("../models");
const Materi = db.materi;

//create: menambahkan data materi 
exports.create = async (req, res) => {
    
    try {
        const data = await Materi.create(req.body)
        res.json({
            message: "Materi created successfully.",
            data: data,
        })    
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }     
}

//getAll: menampilkan semua data quiz
exports.getAll = async (req, res) => {
    try {
      const materi = await Materi.findAll()
      res.json({
        message: "Materi retrieved successfully.",
        data: materi,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        data: null,
      });
    }
  };

//update: mengubah data quiz sesuai id yang dikirimkan
exports.update = async (req, res) => {
    const id = req.params.id
    try {
      const materi = await Materi.findByPk(id, { rejectOnEmpty: true })
      materi.update(req.body, {
        where: {id}
      })
      res.json({
        message: "Materi updated successfully.",
        data: materi,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message || "Some error occurred while retrieving quiz",
        data: null,
      });
    }
  }
  
//delete: menghapus data quiz sesuai id yang dikirimkan
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const materi = await Materi.findByPk(id, { rejectOnEmpty: true })

        materi.destroy()

        res.json({
          message: "Materi deleted successfully",
        });
      } catch (error) {
        res.status(500).json({
          message: error.message || "Some error occurred while retrieving quiz",
          data: null,
        });
      }
    }

//findOne: menampilkan data quiz berdasarkan id tertentu
exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
      const materi = await Materi.findByPk(id, { rejectOnEmpty: true })
      res.json({
        message: `Quizzes retrieved successfully with id=${id}.`,
        data: materi,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message || "Some error occurred while retrieving quiz",
        data: null,
      });
    }
};

//getByCategoryId: menampilkan data quiz berdasarkan kategori tertentu
exports.getByCategoryId = async (req, res) => {
    const id = req.params.id
    const materi = await Materi.findAll({
      where: {
        categoryId: id
      }
    })
    res.json({
      message: `Quizzes retrieved successfully with id=${id}.`,
      data: materi,
    });
}

