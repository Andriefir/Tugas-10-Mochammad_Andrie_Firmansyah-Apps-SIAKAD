const express = require("express");
const dosenmatkulController = require('../controller/dosenmatkulController')
const routeDsnMat = express.Router()

routeDsnMat.post('/',dosenmatkulController.create)
routeDsnMat.get('/get',dosenmatkulController.getAll)
routeDsnMat.get('/get/:id',dosenmatkulController.getById)
routeDsnMat.put('/update/:id',dosenmatkulController.update)
routeDsnMat.delete('/delete/:id',dosenmatkulController.delete)


module.exports = routeDsnMat