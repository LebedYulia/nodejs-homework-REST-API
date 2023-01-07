const {
  getAll,
  getById,
  add,
  updateById,
  updatePartial,
  remove,
} = require("../service");

const getAllContacts = async (req, res, next) => {  
    const contacts = await getAll();
    res.status(200).json({contacts}); 
};

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await getById(contactId)
  if (!result) {
    return res
      .status(404)
      .json({ error: `Contact with ID = ${contactId} does not exist` });
  }
  res.status(200).json(result);
}
 

const addContact = async (req, res, next) => { 
    const data = req.body
    const result = await add(data);
    res.status(201).json(result); 
};

const updateContact = async (req, res, next) => { 
    const { contactId } = req.params;
    const data = req.body
    const result = await updateById(contactId, data);
    if (!result) {
      return res
        .status(404)
        .json({ error: `Contact with ID = ${contactId} does not exist` });
    }
    res.json({result});  
};

const updateStatusContact = async (req, res, next) => { 
    const { contactId } = req.params;
    const { favorite } = req.body;   
    const result = await updatePartial(contactId, { favorite });
    if (!result) {
      return res
        .status(404)
        .json({ error: `Contact with ID = ${contactId} does not exist` });
    }
    res.json(result); 
};

const removeById = async (req, res, next) => {  
    const { contactId } = req.params;
    const result = await remove(contactId);
    if (!result) {
      return res
        .status(404)
        .json({ error: `Contact with ID = ${contactId} does not exist` });
    }
    res.status(200).json({ message: "contact deleted", result }); 
};

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  updateContact,
  updateStatusContact,
  removeById,
};
