import {createContactService ,
        deleteContactService,
        getAllContactsService ,
        getContactByIdService , 
        updateContactService    
    } from "../services/contact.service.js";


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

export const getupdateContact = async(req,res,next)=>{
    try{
        const {id} = req.params
        const updateData =req.body 
        const contact = await updateContactService(id,updateData);

        return res.status(200).json({
            success:true,
            message:'Contact updated successfully.',
            data:contact
        })
    }catch(error){
        next(error)
    }
}

export const getdeleteContact = async (req,res,next)=>{
    try{
        const {id} = req.params
        const contact = await deleteContactService(id)
        return res.status(200).json({
            success:true,
            message:'contact deleted succesfully',
            data:contact
        })
    }catch(error){

        next(error)
    }
}


