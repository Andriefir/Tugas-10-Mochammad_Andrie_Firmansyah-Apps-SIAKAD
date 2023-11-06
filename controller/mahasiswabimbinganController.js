const {Mahasiswa, Dosen, MahasiswaBimbingan} = require("../models")


const mahasiswabimbinganController = {}

/*
    this is auto generate example, you can continue 

*/
mahasiswabimbinganController.index = async(req,res) => {
    res.json({
        message : "Hello mahasiswabimbinganController"
    })
}

mahasiswabimbinganController.create = async (req, res) => {
    const {id_mahasiswa, id_dosen} = req.body
    try {
        const getMahasiswa = await Mahasiswa.findOne({
            where : {
                id : id_mahasiswa
            }
        })
        const getDosen = await Dosen.findOne({
            where : {
                id : id_dosen
            }
        })
        if(getMahasiswa === null | getDosen === null) {
            throw error("Data Tidak Ditemukan")
        } else {
            const createMhsBim = MahasiswaBimbingan.create({
                id_mahasiswa : getMahasiswa.id,
                id_dosen : getDosen.id
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

mahasiswabimbinganController.getAll = async (req,res) => {
    const getMhsBim = await Dosen.findAll({
        include : [
            {
                model : Mahasiswa
            }
        ]
    })
    res.json({
        data : getMhsBim
    })
}

mahasiswabimbinganController.getById = async (req,res) => {
    const {id} = req.params
    const getMhsBim = await Dosen.findOne({
        include : [
            {
                model : Mahasiswa
            }
        ],        where : {
            id : id
        }
    })
    res.json({
        data : getMhsBim
    })
}

mahasiswabimbinganController.update = async (req, res) => {
    const {id_mahasiswa, id_dosen} = req.body
    const {id} = req.params
    try {
        const getMahasiswa = await Mahasiswa.findOne({
            where : {
                id : id_mahasiswa
            }
        })
        const getDosen = await Dosen.findOne({
            where : {
                id : id_dosen
            }
        },{
            where : {
                id : id
            }
        })
        if(getMahasiswa === null | getDosen === null) {
            throw error("Data Tidak Ditemukan")
        } else {
            const createMhsBim = MahasiswaBimbingan.update({
                id_mahasiswa : getMahasiswa.id,
                id_dosen : getDosen.id
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

mahasiswabimbinganController.delete = async (req,res) => {
    const {id} = req.params
    try {
        const deleteMhsBim = await MahasiswaBimbingan.destroy({
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

module.exports = mahasiswabimbinganController

