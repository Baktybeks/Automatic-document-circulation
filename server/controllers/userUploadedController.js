const {UserUploaded, User} = require('../models/models')
const ApiError = require('../error/ApiError')

class UserUploadedController {
    async create(req, res, next) {
        try {
            const {uploadedId, userId} = req.body
            const userUploaded = await UserUploaded.create({uploadedId, userId})
            return res.json(userUploaded)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const userUploaded = await UserUploaded.findAll()
        return res.json(userUploaded)
    }

    async getUserAll(req, res) {
        const userUploaded = await UserUploaded.findAll(
            {
                include: [
                    {
                        model: User,
                        attributes: ['login', 'email', 'phone']
                    }
                ]
            }
        )
        return res.json(userUploaded)
    }

    async getOne(req, res) {
        const {id} = req.params
        const userUploaded = await UserUploaded.findOne(
            {
                where:{id}
            }
        )
        return res.json(userUploaded)
    }
}

module.exports = new UserUploadedController()