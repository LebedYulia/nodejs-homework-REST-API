const { updateById } = require("../../service");
const { RequestError } = require("../../helpers");

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const { _id } = req.user;
  const data = req.body;
  const result = await updateById(contactId, _id, data);
  if (!result) {
    throw RequestError(404, `Contact with ID = ${contactId} does not exist`);
  }
  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      result
    }});
};

module.exports = updateContact;
