const Router = require('express')
const router = new Router()
const processRouter = require('./processRouter')

router.use('/process', processRouter)


module.exports = router