const { getById } = require("../../service");
const { RequestError } = require('../../helpers')

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await getById(contactId);
  if (!result) {
    throw RequestError(404, `Contact with ID = ${contactId} does not exist`)     
  }
  res.status(200).json(result);
};

module.exports = getContactById;
