import Contact from "../models/contact.model.js";
import AppError from "../utils/AppError.js";

export const createContactService= async (contactData)=>{
    const contact = await Contact.create(contactData)
    return contact
};

export const getAllContactsService = async ()=>{
    const contacts = await Contact.find()
    return contacts
};

export const getContactByIdService = async(id)=>{
    const contact = await Contact.findById(id)
    if(!contact){
        throw new AppError('contact not found',404)
    }
    return contact
}

export const updateContactService = async (id , updateData)=>{
    const contact = await Contact.findByIdAndUpdate(id , updateData ,
        {
            runValidators:true,
            new:true
        })
        if(!contact){
            throw new AppError('contact not found',404)
        }
    return contact
}

 export const deleteContactService = async (id)=>{
    const contact = await Contact.findByIdAndDelete(id)

    if(!contact){
        throw new AppError('contact not found',404)
    }
    return contact
 }