const { add } = require("../../service");

const addContact = async (req, res) => {  
  const result = await add(req.body);
  res.status(201).json(result);
};

module.exports = addContact;
