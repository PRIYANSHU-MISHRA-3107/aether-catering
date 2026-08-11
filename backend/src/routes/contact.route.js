import express from 'express'
import { contactSchema, updateContactSchema } from '../validators/contact.validation.js'
import validate from "../middlewares/validate.js"
import requireAuth from "../middlewares/auth.middleware.js";
import requireRole from "../middlewares/requireRole.js";
import { createContact , getAllContacts, getContactById,getdeleteContact,getupdateContact } from "../controllers/contact.controller.js"




const router = express.Router()

router.post(
    "/contacts",
    validate(contactSchema),
    createContact
  );
  
  router.get(
    "/contacts",
    requireAuth,
    requireRole(["admin"]),
    getAllContacts
  );
  
  router.get(
    "/contacts/:id",
    requireAuth,
    requireRole(["admin"]),
    getContactById
  );
  
  router.patch(
    "/contacts/:id",
    requireAuth,
    requireRole(["admin"]),
    validate(updateContactSchema),
    getupdateContact
  );
  
  router.delete(
    "/contacts/:id",
    requireAuth,
    requireRole(["admin"]),
    getdeleteContact
  );
export default router