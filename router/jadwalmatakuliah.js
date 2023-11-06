const express = require("express");
const jadwalmatakuliahController = require('../controller/jadwalmatakuliahController')
const routeJadwal = express.Router()

routeJadwal.post('/',jadwalmatakuliahController.create)
routeJadwal.get('/get',jadwalmatakuliahController.getAll)
routeJadwal.get('/get/:id',jadwalmatakuliahController.getById)
routeJadwal.put('/update/:id',jadwalmatakuliahController.update)
routeJadwal.delete('/delete/:id',jadwalmatakuliahController.delete)

module.exports = routeJadwal