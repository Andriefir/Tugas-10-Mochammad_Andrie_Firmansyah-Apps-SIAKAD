const express = require("express");
const mahasiswabimbinganController = require("../controller/mahasiswabimbinganController");
const routeMhsBim = express.Router()

routeMhsBim.post('/',mahasiswabimbinganController.create)
routeMhsBim.get('/get',mahasiswabimbinganController.getAll)
routeMhsBim.get('/get/:id',mahasiswabimbinganController.getById)
// routeMhsBim.put('/update/:id',mahasiswabimbinganController.update)
// routeMhsBim.delete('/delete/:id',mahasiswabimbinganController.delete)


module.exports = routeMhsBim