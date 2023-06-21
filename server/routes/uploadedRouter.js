const Router = require('express')
const router = new Router()
const uploadedController = require('../controllers/uploadedController')

router.post('/', uploadedController.create)
router.get('/', uploadedController.getAll)
router.get('/:id', uploadedController.getOne)

module.exports = router