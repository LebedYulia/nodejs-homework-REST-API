const { updateContact } = require("../../models/contacts");

const updateById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await updateContact(contactId, req.body);
    if (!result) {
      return res
        .status(404)
        .json({ error: `Contact with ID = ${contactId} does not exist` });
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
