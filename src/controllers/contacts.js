import { getAllContacts, getContactById } from '../services/contacts.js';

export const getAllContactsController = async (req, res) => {
  try {
    const result = await getAllContacts();
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
};

export const getContactByIdController = async (req, res) => {
  try {
    const { contactId } = req.params;
    const result = await getContactById(contactId);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
};
