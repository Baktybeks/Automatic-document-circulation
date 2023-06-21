const {Review} = require('../models/models')
const ApiError = require('../error/ApiError')


class ReviewController {
    async create(req, res, next) {
        try {
            const {name, description} = req.body
            const review = await Review.create({name, description})
            return res.json(review)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const review = await Review.findAll()
        return res.json(review)
    }
}

module.exports = new ReviewController()