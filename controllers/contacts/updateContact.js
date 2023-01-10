const { updateById } = require("../../service");
const { RequestError } = require("../../helpers");

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const data = req.body;
  const result = await updateById(contactId, data);
  if (!result) {
    throw RequestError(404, `Contact with ID = ${contactId} does not exist`);
  }
  res.json(result);
};

module.exports = updateContact;
