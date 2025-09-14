import { Contact } from '../db/Contact.js';
import createError from 'http-errors';

export const getAllContacts = async () => {
  try {
    const contacts = await Contact.find();
    return {
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    };
  } catch (error) {
    throw error;
  }
};

export const createContact = async (contactData) => {
  try {
    const newContact = await Contact.create(contactData);
    return {
      status: 201,
      message: "Successfully created a contact!",
      data: newContact,
    };
  } catch (error) {
    throw error;
  }
};

export const updateContact = async (contactId, updateData) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      contactId,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!updatedContact) {
      throw createError(404, "Contact not found");
    }

    return {
      status: 200,
      message: "Successfully patched a contact!",
      data: updatedContact,
    };
  } catch (error) {
    throw error;
  }
};

export const deleteContact = async (contactId) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(contactId);
    
    if (!deletedContact) {
      throw createError(404, "Contact not found");
    }

    return {
      status: 204,
      message: "Contact successfully deleted",
    };
  } catch (error) {
    throw error;
  }
};

export const getContactById = async (contactId) => {
  try {
    const contact = await Contact.findById(contactId);
    
    if (!contact) {
      throw createError(404, "Contact not found");
    }

    return {
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    };
  } catch (error) {
    throw error;
  }
};
