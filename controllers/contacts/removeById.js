const { remove } = require("../../service");
const {RequestError} = require("../../helpers");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const { _id } = req.user;
  const result = await remove(contactId, _id);
  if (!result) {
    throw RequestError(404, `Contact with ID = ${contactId} does not exist`)     
  }
  res.status(200).json({ message: "Contact deleted", result });
};

module.exports = removeById;
