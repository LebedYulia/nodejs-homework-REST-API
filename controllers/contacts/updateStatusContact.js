const { updatePartial } = require("../../service");
const {RequestError} = require("../../helpers");

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const { _id } = req.user;
  const { favorite } = req.body;
 
  const result = await updatePartial(contactId, _id, { favorite });
  if (!result) {
    throw RequestError(404, `Contact with ID = ${contactId} does not exist`)     
  }
  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      result
    }});;
};

module.exports = updateStatusContact;
