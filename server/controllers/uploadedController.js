const {Uploaded} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')


class ProductController {
    async create(req, res, next) {
        try {
            const {author, role} = req.body
            const {uploadedFile} = req.files
            let fileName = uuid.v4() + ".pdf"
            uploadedFile.mv(path.resolve(__dirname, '..', 'static', fileName))
            const uploaded = await Uploaded.create({author, role, uploadedFile: fileName})
            return res.json(uploaded)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) {
        const uploaded = await Uploaded.findAll()
        return res.json(uploaded)
    }

    async getOne(req, res) {
        const {id} = req.params
        const uploaded = await Uploaded.findOne(
            {
                where:{id}
            }
        )
        return res.json(uploaded)
    }
}

module.exports = new ProductController()