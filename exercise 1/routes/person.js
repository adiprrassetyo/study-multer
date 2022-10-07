const express = require('express')
const router = express.Router()
const {getPerson, postPerson, putPerson, deletePerson} = require('../controller/person_controller.js')

router.get(("/"),  getPerson)
router.post(("/"), postPerson)
router.put(("/:id"), putPerson)
router.delete(("/:id"),deletePerson)

module.exports = router