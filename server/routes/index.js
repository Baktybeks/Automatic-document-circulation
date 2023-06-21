const Router = require('express')
const router = new Router()
const uploadedRouter = require('./uploadedRouter')
const userRouter = require('./userRouter')
const userUploadedRouter = require('./userUploadedRouter')

router.use('/uploaded', uploadedRouter)
router.use('/user', userRouter)
router.use('/user_uploaded', userUploadedRouter)


module.exports = router