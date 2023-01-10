const { updatePartial } = require("../../service");
const {RequestError} = require("../../helpers");

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
 
  const result = await updatePartial(contactId, { favorite });
  if (!result) {
    throw RequestError(404, `Contact with ID = ${contactId} does not exist`)     
  }
  res.json(result);
};

module.exports = updateStatusContact;
