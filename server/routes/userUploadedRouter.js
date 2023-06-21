const Router = require('express')
const router = new Router()
const userUploadedController = require('../controllers/userUploadedController')

router.post('/', userUploadedController.create)
router.get('/', userUploadedController.getUserAll)
router.get('/:id', userUploadedController.getOne)
router.get('/all/:userId', userUploadedController.getUserAll)

module.exports = router