import express from 'express'
import { contactSchema } from '../validators/contact.validation.js'
import validate from "../middlewares/validate.js"
import { createContact , getAllContacts, getContactById } from "../controllers/contact.controller.js"



const router = express.Router()

router.post('/contacts',validate(contactSchema),createContact)
router.get('/contacts',getAllContacts)
router.get('/contacts/:id', getContactById)


export default router