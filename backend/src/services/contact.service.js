import Contact from "../models/contact.model.js";

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

    return contact
}