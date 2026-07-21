import { success } from "zod";
import {createContactService ,
        getAllContactsService ,
        getContactByIdService } from "../services/contact.service.js";
        



export const createContact = async (req , res, next)=>{
    try{
        const contact = await createContactService(req.body)

        return res.status(201).json({
            success:true,
            message:'contact submitted successfully',
            data:contact
        })
    }catch(error){

        next(error)
    }
};

export const getAllContacts = async (req,res,next)=>{

    try{
        const contacts = await getAllContactsService()

        return res.status(200).json({
            success:true,
            message:'contacts fetched successfully',
            data:contacts
        })
    }catch(error){

        next(error)
    }
}

export const getContactById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const contact = await getContactByIdService(id);

        return res.status(200).json({
            success: true,
            message: "Contact fetched successfully.",
            data: contact,
        });
    } catch (error) {
        next(error);
    }
};