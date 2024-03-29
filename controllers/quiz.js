const db = require("../models");
const Quiz = db.quiz;

//create: menambahkan data quiz 
exports.create = async (req, res) => {
    
    try {
        const data = await Quiz.create(req.body)
        res.json({
            message: "quiz created successfully.",
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
      const quizzes = await Quiz.findAll()
      res.json({
        message: "Quizzes retrieved successfully.",
        data: quizzes,
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
      const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
      quiz.update(req.body, {
        where: {id}
      })
      res.json({
        message: "Quizzes updated successfully.",
        data: quiz,
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
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })

        quiz.destroy()

        res.json({
          message: "Quiz deleted successfully",
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
      const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
      res.json({
        message: `Quizzes retrieved successfully with id=${id}.`,
        data: quiz,
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
    const quizzes = await Quiz.findAll({
      where: {
        categoryId: id
      }
    })
    res.json({
      message: `Quizzes retrieved successfully with id=${id}.`,
      data: quizzes,
    });
}

//getByLevelId: menampilkan data quiz berdasarkan level tertentu
exports.getByLevelId = async (req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
      where: {
        levelId: id,
      }
    })
    res.json({
      message: `Quizzes retrieved successfully with levelId=${id}.`,
      data: quizzes,
    });
}