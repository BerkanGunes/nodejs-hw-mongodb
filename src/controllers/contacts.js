import { getAllContacts, getContactById, createContact, updateContact, deleteContact } from '../services/contacts.js';

export const getAllContactsController = async (req, res) => {
  const result = await getAllContacts();
  res.status(result.status).json(result);
};

export const getContactByIdController = async (req, res) => {
  const { contactId } = req.params;
  const result = await getContactById(contactId);
  res.status(result.status).json(result);
};

export const createContactController = async (req, res) => {
  const result = await createContact(req.body);
  res.status(result.status).json(result);
};

export const updateContactController = async (req, res) => {
  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body);
  res.status(result.status).json(result);
};

export const deleteContactController = async (req, res) => {
  const { contactId } = req.params;
  const result = await deleteContact(contactId);
  res.status(result.status).end();
};
