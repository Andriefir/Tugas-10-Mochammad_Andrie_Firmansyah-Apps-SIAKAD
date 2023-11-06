const express = require("express");
const exampleController = require("../controller/exampleController");
const routeMahasiswa = require("./mahasiswa");
const routeDosen = require("./dosen");
const routeMatakuliah = require("./matakuliah");
const routeDsnMat = require("./dosenmatkul");
const routeJadwal = require("./jadwalmatakuliah");
const routeMhsBim = require("./mahasiswabimbingan");
const route = express.Router()

route.get('/',exampleController.index)
route.use('/mahasiswa',routeMahasiswa)
route.use('/dosen',routeDosen)
route.use('/matakuliah',routeMatakuliah)
route.use('/dosenmatkul',routeDsnMat)
route.use('/jadwalmatakuliah',routeJadwal)
route.use('/mahsiswabimbingan',routeMhsBim)

module.exports = route