const {MataKuliah} = require("../models")

const matkulController = {}

/*
    this is auto generate example, you can continue 

*/
matkulController.index = async(req,res) => {
    res.json({
        message : "Hello matkulController"
    })
}

matkulController.create = async (req,res) => {
    const {kodeMatkul,nama,sks} = req.body
    try {
        const createMatKul = await MataKuliah.create({
            nama : nama,
            kodeMatkul : kodeMatkul,
            sks : sks
        })
        return res.status(201).json({
            message : 'Data Berhasil Ditambahkan'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message : error
        })
    }
}

matkulController.getAll = async (req,res) => {
    try {
        const getMatKul = await MataKuliah.findAll({
            order : [["createdAt","DESC"]]
        })
        return res.status(200).json({
            data : getMatkul
        })
    } catch (error) {
        console.log(error)
        return res.status(201).json({
            message : error
        })
    }
}

matkulController.getById = async (req,res) => {
    const {id} = req.params
    try {
        const getDetailMatKul = await MataKuliah.findOne({
            where : {
                id : id
            }
        })
        return res.status(200).json({
            data : getDetailMatKul

        })
    } catch (error) {
        console.log(error)
        return res.status(201).json({
            message : error
        })
    }
}

matkulController.update = async (req,res) => {
    const {kodeMatkul,nama,sks} = req.body
    const id = req.params.id
    try {
        const getDetailMatKul= await MataKuliah.findOne({
            where : {
                id : id
            }
        })
        if(getDetailMatKul === null){
            return res.status(404).json({
                message : "Data Tidak Ada !"
            })
        } 
        const updateMatKul = await MataKuliah.update({
            nama : nama,
            kodeMatkul : kodeMatkul,
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

matkulController.delete = async (req,res) => {
    const {id} = req.params
    try {
        const deleteMatKul = await MataKuliah.destroy({
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

module.exports = matkulController

