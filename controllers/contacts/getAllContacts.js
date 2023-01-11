const { getAll } = require("../../service");

const getAllContacts = async (_, res) => {  
  const contacts = await getAll();
  res.status(200).json({contacts}); 
};

module.exports = getAllContacts;
