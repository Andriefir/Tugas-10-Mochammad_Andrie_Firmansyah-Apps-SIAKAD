const {Matakuliah} = require('../models');

const matakuliahController = {}

/*
    this is auto generate example, you can continue 

*/
matakuliahController.index = async(req,res) => {
    res.json({
        message : "Hello matakuliahController"
    })
}

matakuliahController.create = async (req,res) => {
    const {nama,kode_matkul,sks} = req.body
    try {
        const createMatakuliah = await Matakuliah.create({
            nama : nama,
            kode_matkul : kode_matkul,
            sks : sks
        })
        return res.status(201).json({
            message : 'Data Berhasil Ditambahkan'
        })
    } catch (error) {
        console.log(error)
        return res.status(201).json({
            message : error
        })
    }
}

matakuliahController.getAll = async (req,res) => {
    try {
        const getMatakuliah = await Matakuliah.findAll({
            order : [["createdAt","DESC"]]
        })
        return res.status(200).json({
            data : getMatakuliah
        })
    } catch (error) {
        console.log(error)
        return res.status(201).json({
            message : error
        })
    }
}

matakuliahController.getById = async (req,res) => {
    const {id} = req.params
    try {
        const getDetailMatakuliah = await Matakuliah.findOne({
            where : {
                id : id
            }
        })
        return res.status(200).json({
            data : getDetailMatakuliah
        })
    } catch (error) {
        console.log(error)
        return res.status(201).json({
            message : error
        })
    }
}

matakuliahController.update = async (req,res) => {
    const {nama,kode_matkul,sks} = req.body
    const id = req.params.id
    try {
        const getDetailMatakuliah = await Matakuliah.findOne({
            where : {
                id : id
            }
        })
        if(getDetailMatakuliah === null){
            return res.status(404).json({
                message : "Data Tidak Ada !"
            })
        } 
        const updateMatakuliah = await Matakuliah.update({
            nama : nama,
            kode_matkul : kode_matkul,
            sks : sks
        },{
            where : {
                id : id
            }
        })
        return res.status(200).json({
            message : 'Data Berhasil Diubah'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message : error
        })
    }
}

matakuliahController.delete = async (req,res) => {
    const {id} = req.params
    try {
        const deleteMatakuliah = await Matakuliah.destroy({
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

module.exports = matakuliahController

