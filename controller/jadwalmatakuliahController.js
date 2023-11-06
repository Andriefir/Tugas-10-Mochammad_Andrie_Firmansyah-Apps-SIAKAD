const {JadwalMataKuliah} = require("../models");

const jadwalmatakuliahController = {}

/*
    this is auto generate example, you can continue 

*/
jadwalmatakuliahController.index = async(req,res) => {
    res.json({
        message : "Hello jadwalmatakuliahController"
    })
}

jadwalmatakuliahController.create = async (req,res) => {
    const {id_matkul,hari,jam} = req.body
    try {
        const createJadwal = await JadwalMataKuliah.create({
            id_matkul : id_matkul,
            hari : hari,
            jam : jam
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

jadwalmatakuliahController.getAll = async (req,res) => {
    try {
        const getJadwal = await JadwalMataKuliah.findAll({
            order : [["createdAt","DESC"]]
        })
        return res.status(200).json({
            data : getJadwal
        })
    } catch (error) {
        console.log(error)
        return res.status(201).json({
            message : error
        })
    }
}

jadwalmatakuliahController.getById = async (req,res) => {
    const {id} = req.params
    try {
        const getJadwal = await JadwalMataKuliah.findOne({
            where : {
                id : id
            }
        })
        return res.status(200).json({
            data : getJadwal
        })
    } catch (error) {
        console.log(error)
        return res.status(201).json({
            message : error
        })
    }
}

jadwalmatakuliahController.update = async (req,res) => {
    const {id_matkul,hari,jam} = req.body
    const id = req.params.id
    try {
        const getDetailJdwlMatKul = await JadwalMataKuliah.findOne({
            where : {
                id : id
            }
        })
        if(getDetailJdwlMatKul === null){
            return res.status(404).json({
                message : "Data Tidak Ada !"
            })
        } 
        const updateJadwalMataKuliah = await JadwalMataKuliah.update({
            id_matkul : id_matkul,
            hari : hari,
            jam : jam
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

jadwalmatakuliahController.delete = async (req,res) => {
    const {id} = req.params
    try {
        const deleteJdwlMatKul = await JadwalMataKuliah.destroy({
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

module.exports = jadwalmatakuliahController

