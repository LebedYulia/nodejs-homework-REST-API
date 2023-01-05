const { getContactById } = require("../../models/contacts");

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await getContactById(contactId);
    if (!result) {
      return res
        .status(404)
        .json({ error: `Contact with ID = ${contactId} does not exist` });
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
