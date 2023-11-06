const {Dosen, Matakuliah, DosenMatkul} = require("../models")

const dosenmatkulController = {}

/*
    this is auto generate example, you can continue 

*/
dosenmatkulController.index = async(req,res) => {
    res.json({
        message : "Hello dosenmatkulController"
    })
}

dosenmatkulController.create = async (req, res) => {
    const {id_dosen, id_matkul} = req.body
    try {
        const getDosen = await Dosen.findOne({
            where : {
                id : id_dosen
            }
        })
        const getMatakuliah = await Matakuliah.findOne({
            where : {
                id : id_matkul
            }
        })
        if(getDosen === null | getMatakuliah === null) {
            throw error("Data Tidak Ditemukan")
        } else {
            const createDsnMat = DosenMatkul.create({
                id_dosen : getDosen.id,
                id_matkul : getMatakuliah.id
            })
            return res.status(201).json({
                message : 'Data Berhasil Ditambahkan'
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message : error
        })
    }
}

dosenmatkulController.getAll = async (req,res) => {
        const getDsnMat = await Dosen.findAll({
            include : [
                {
                    model : Matakuliah
                }
            ]
        })
        res.json({
            data : getDsnMat
        })
}

dosenmatkulController.getById = async (req,res) => {
    const {id} = req.params
    const getDsnMat = await Dosen.findOne({
        include : [
            {
                model : Matakuliah
            }
        ],        where : {
            id : id
        }
    })
    res.json({
        data : getDsnMat
    })
}

dosenmatkulController.update = async (req, res) => {
    const {id_dosenm, id_matkul} = req.body
    const {id} = req.params
    try {
        const getDosen = await Dosen.findOne({
            where : {
                id : id_dosen
            }
        })
        const getMatakuliah = await Matakuliah.findOne({
            where : {
                id : id_matkul
            }
        })
        if(getDosen === null | getMatakuliah === null) {
            throw error("Data Tidak Ditemukan")
        } else {
            const createDsnMat = DosenMatkul.update({
                id_dosen : getDosen.id,
                id_matkul : getMatakuliah.id
            }, {
                where : {
                    id: id
                }
            })
            return res.status(201).json({
                message : 'Data Berhasil Diubah'
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message : error
        })
    }
}

dosenmatkulController.delete = async (req,res) => {
    const {id} = req.params
    try {
        const deleteDsnMat = await DosenMatkul.destroy({
            where : {
                id : id
            }
        })
        return res.status(200).json({
            data : "Data Berhasil Dihapus !"
        })
    } catch (error) {
        console.log(error)
        return res.status(201).json({
            message : error
        })
    }
}

module.exports = dosenmatkulController

