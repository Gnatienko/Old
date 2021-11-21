
   
const Router = require('express')
const router = new Router()
const processController = require('../controllers/processController')


router.get('/', processController.process)


module.exports = router